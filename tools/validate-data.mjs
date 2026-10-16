#!/usr/bin/env node
// 校验作品集站点的数据源 assets/data.js —— 供 CI 与本地预检使用，零依赖。
//
// 为什么需要它：这个仓有**两个写入方**（本机 + 另一台机）加一个每日同步脚本，改的都是 data.js。
// 一旦写坏（语法错误、数组里多了个逗号留下空洞、kind 与链接域名不符），线上页面会整页白屏或
// 某个项目渲染不出来 —— 而 Pages 是自动部署的，坏数据会直接上线。
//
// 用法：node tools/validate-data.mjs [--file assets/data.js] [--quiet]
// 退出码：0 = 通过；1 = 有问题（CI 会红）。

import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d; };
const QUIET = process.argv.includes('--quiet');
// --root 只为一个目的存在：反例测试时把整站复制到临时目录，用坏数据跑一遍，不碰真文件。
const ROOT = resolve(arg('root', resolve(dirname(fileURLToPath(import.meta.url)), '..')));
const DATA_REL = arg('file', 'assets/data.js');
const DATA = resolve(ROOT, DATA_REL);

const problems = [];
const warnings = [];
const bad = (m) => problems.push(m);
const warn = (m) => warnings.push(m);

// ── 1. 读出并执行（语法错误在这里就被抓住）
if (!existsSync(DATA)) { console.error(`✗ 找不到 ${DATA_REL}`); process.exit(1); }
const src = readFileSync(DATA, 'utf8');

// 注意：顶层 `const` 不会成为 vm context 的属性，必须在同一脚本作用域里显式导出。
let data;
try {
  const ctx = vm.createContext({});
  vm.runInContext(`${src}\n;globalThis.__DATA__ = { PROJECTS, OTHERS, META };`, ctx, { filename: DATA_REL });
  data = ctx.__DATA__;
} catch (err) {
  console.error(`✗ ${DATA_REL} 无法执行（语法错误？）：${err.message}`);
  process.exit(1);
}
if (!data) { console.error(`✗ ${DATA_REL} 里没找到 PROJECTS / OTHERS / META`); process.exit(1); }

// ── 2. 结构常量
const KINDS = {
  github: ['github.com'],
  npm: ['npmjs.com'],
  bilibili: ['bilibili.com'],
  zhihu: ['zhihu.com'],
  wechat: ['mp.weixin.qq.com'],
  feishu: ['feishu.cn', 'larksuite.com'],
  site: null, // 落地页：任意 https 主机都行
};
const PROJECT_KEYS = ['idx', 'kicker', 'name', 'type', 'stage', 'live', 'date', 'desc', 'tech', 'links'];

// 数组里有没有「空洞」（多打一个逗号会造成 [a, , b]，长度对但索引缺失）
const holes = (arr, where) => {
  const missing = [];
  for (let i = 0; i < arr.length; i += 1) if (!(i in arr)) missing.push(i);
  if (missing.length) bad(`${where} 有空洞（多余逗号？）：索引 ${missing.join(',')} 是 undefined`);
  arr.forEach((v, i) => { if (v === undefined || v === null) bad(`${where}[${i}] 是 ${v}`); });
};

// ── 3. PROJECTS
const { PROJECTS, OTHERS, META } = data;
if (!Array.isArray(PROJECTS) || !PROJECTS.length) bad('PROJECTS 不是非空数组');
else {
  holes(PROJECTS, 'PROJECTS');
  const seen = { name: new Map(), idx: new Map() };
  const urls = new Map();
  PROJECTS.forEach((p, i) => {
    const at = `PROJECTS[${i}]（${p?.name ?? '无名'}）`;
    if (!p || typeof p !== 'object') { bad(`${at} 不是对象`); return; }
    for (const k of PROJECT_KEYS) if (p[k] === undefined) bad(`${at} 缺字段 ${k}`);
    for (const k of ['kicker', 'name', 'type', 'stage', 'desc', 'tech']) {
      if (typeof p[k] !== 'string' || !p[k].trim()) bad(`${at}.${k} 必须是非空字符串`);
    }
    if (typeof p.live !== 'boolean') bad(`${at}.live 必须是布尔值（当前 ${typeof p.live}）`);
    // 日期两种写法都合法：2026.10.16（有日）与 2026.10（只知道年月，同步脚本会产出）
    if (typeof p.date !== 'string' || !/^\d{4}\.\d{2}(\.\d{2})?$/.test(p.date)) bad(`${at}.date 需形如 2026.10 或 2026.10.16（当前 ${p.date}）`);
    if (typeof p.desc === 'string' && !/[。.]$/.test(p.desc.trim())) warn(`${at}.desc 最好以句号结尾`);
    if (typeof p.idx === 'string') {
      if (!/^\d{2}$/.test(p.idx)) warn(`${at}.idx 建议两位补零（当前 ${p.idx}）`);
      if (seen.idx.has(p.idx)) bad(`idx 重复：${p.idx} 同时出现在 PROJECTS[${seen.idx.get(p.idx)}] 与 PROJECTS[${i}]`);
      else seen.idx.set(p.idx, i);
    } else bad(`${at}.idx 必须是字符串`);
    if (seen.name.has(p.name)) bad(`name 重复：${p.name}`);
    else seen.name.set(p.name, i);

    if (!Array.isArray(p.links) || !p.links.length) { bad(`${at}.links 必须是非空数组`); return; }
    holes(p.links, `${at}.links`);
    p.links.forEach((l, j) => {
      const lat = `${at}.links[${j}]`;
      if (!l || typeof l !== 'object') { bad(`${lat} 不是对象`); return; }
      for (const k of ['kind', 'label', 'url']) if (typeof l[k] !== 'string' || !l[k].trim()) bad(`${lat}.${k} 必须是非空字符串`);
      if (!/^https:\/\/[^\s]+$/.test(l.url ?? '')) { bad(`${lat}.url 必须是 https 绝对地址（当前 ${l.url}）`); return; }
      if (!(l.kind in KINDS)) { bad(`${lat}.kind 不在允许集合内：${l.kind}（允许 ${Object.keys(KINDS).join('/')}）`); return; }
      const hosts = KINDS[l.kind];
      if (hosts) {
        let host;
        try { host = new URL(l.url).hostname; } catch { bad(`${lat}.url 解析失败`); return; }
        if (!hosts.some((h) => host === h || host.endsWith(`.${h}`))) {
          bad(`${lat} kind=${l.kind} 与域名不符：${host}（应属 ${hosts.join(' 或 ')}）`);
        }
      }
      if (urls.has(l.url)) warn(`链接在两处重复：${l.url}（先出现于 ${urls.get(l.url)}）`);
      else urls.set(l.url, lat);
    });
  });
  const idxs = PROJECTS.map((p) => Number(p?.idx)).filter((n) => Number.isFinite(n)).sort((a, b) => a - b);
  if (idxs.some((n, i) => n !== i + 1)) warn(`idx 不是从 01 连续排列：${idxs.join(',')}（重编号通常是同步脚本的活）`);
}

// ── 4. OTHERS
if (!Array.isArray(OTHERS)) bad('OTHERS 必须是数组');
else {
  holes(OTHERS, 'OTHERS');
  OTHERS.forEach((o, i) => {
    const at = `OTHERS[${i}]（${o?.name ?? '无名'}）`;
    if (!o || typeof o !== 'object') { bad(`${at} 不是对象`); return; }
    for (const k of ['name', 'tag', 'desc', 'url']) if (typeof o[k] !== 'string' || !o[k].trim()) bad(`${at}.${k} 必须是非空字符串`);
    if (o.url && !/^https:\/\//.test(o.url)) bad(`${at}.url 必须是 https（当前 ${o.url}）`);
  });
}

// ── 5. META
if (!META || typeof META !== 'object') bad('META 缺失或不是对象');
else if (!META.owner) warn('META.owner 为空');

// ── 6. 站点文件自洽：index.html 引用的本地资源必须存在且非空
const INDEX = join(ROOT, 'index.html');
if (!existsSync(INDEX)) bad('index.html 不存在');
else {
  const html = readFileSync(INDEX, 'utf8');
  const refs = [...html.matchAll(/(?:src|href)="([^"#?][^"]*)"/g)]
    .map((m) => m[1])
    .filter((u) => !/^(https?:|data:|mailto:|\/\/)/.test(u));
  if (!refs.length) warn('index.html 没有引用任何本地资源（异常？）');
  for (const ref of refs) {
    const f = join(ROOT, ref);
    if (!existsSync(f)) bad(`index.html 引用了不存在的文件：${ref}`);
    else if (readFileSync(f).length === 0) bad(`index.html 引用的文件是空的：${ref}`);
  }
  if (!refs.includes('assets/data.js')) bad('index.html 没有引用 assets/data.js（数据不会被加载）');
}

// ── 报告
if (!QUIET) {
  console.log(`校验 ${DATA_REL}：PROJECTS ${PROJECTS?.length ?? '?'} 个项目、OTHERS ${OTHERS?.length ?? '?'} 个杂项、META.owner=${META?.owner ?? '?'}`);
  const links = (PROJECTS ?? []).flatMap((p) => (Array.isArray(p?.links) ? p.links : []));
  console.log(`  链接总数 ${links.length}：${[...new Set(links.map((l) => l?.kind))].join(', ')}`);
}
for (const w of warnings) console.log(`  ⚠ ${w}`);
for (const p of problems) console.log(`  ✗ ${p}`);
if (problems.length) {
  console.error(`\n校验未通过：${problems.length} 个问题${warnings.length ? `、${warnings.length} 个警告` : ''}`);
  process.exit(1);
}
console.log(`\n✅ 校验通过${warnings.length ? `（${warnings.length} 个警告）` : ''}`);
