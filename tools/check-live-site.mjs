#!/usr/bin/env node
// 校验线上部署：把线上 assets/data.js 与本次提交的文件比对。
//
// 为什么单独一步：`validate-data.mjs` 只证明「仓库里的数据是好的」，不证明「线上是这份数据」。
// Pages 部署有延迟，且 CDN 可能还压着上一版 —— 所以这里带重试，超时才算失败。
//
// 用法：node tools/check-live-site.mjs [--url https://…] [--attempts 10] [--delay 30000]
// 退出码：0 = 线上已是本次提交的内容；1 = 超时仍不一致（CI 会红，并打印首个差异位置）。

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const arg = (n, d) => { const i = process.argv.indexOf(`--${n}`); return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d; };
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// 这个值属于「本站特有的坐标」，换仓库时要改这里（或 --url 覆盖）
const BASE = arg('url', 'https://439436269-ctrl.github.io/portfolio/').replace(/\/?$/, '/');
const ATTEMPTS = Number(arg('attempts', 10));
const DELAY_MS = Number(arg('delay', 30000));

const norm = (s) => s.replace(/\r\n/g, '\n').trimEnd();
const local = norm(readFileSync(resolve(ROOT, 'assets/data.js'), 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const firstDiff = (a, b) => {
  const la = a.split('\n');
  const lb = b.split('\n');
  for (let i = 0; i < Math.max(la.length, lb.length); i += 1) {
    if (la[i] !== lb[i]) return `第 ${i + 1} 行不同：\n  线上: ${(lb[i] ?? '(无)').slice(0, 120)}\n  本地: ${(la[i] ?? '(无)').slice(0, 120)}`;
  }
  return '内容相同（长度差异）';
};

console.log(`线上地址: ${BASE}`);
console.log(`本地 assets/data.js: ${local.length} 字符`);

let last = '';
for (let i = 1; i <= ATTEMPTS; i += 1) {
  try {
    const index = await fetch(`${BASE}?t=${Date.now()}`, { headers: { 'cache-control': 'no-cache', 'user-agent': 'portfolio-ci' } });
    const res = await fetch(`${BASE}assets/data.js?t=${Date.now()}`, { headers: { 'cache-control': 'no-cache', 'user-agent': 'portfolio-ci' } });
    if (!index.ok) { last = `首页 HTTP ${index.status}`; }
    else if (!res.ok) { last = `data.js HTTP ${res.status}`; }
    else {
      const remote = norm(await res.text());
      if (remote === local) {
        console.log(`\n✅ 第 ${i} 次尝试：线上 data.js 与本次提交一致（首页 HTTP ${index.status}）`);
        process.exit(0);
      }
      last = `不一致（线上 ${remote.length} 字符）\n  ${firstDiff(local, remote)}`;
    }
  } catch (err) {
    last = `请求失败：${err.message}`;
  }
  console.log(`  [${i}/${ATTEMPTS}] ${last.split('\n')[0]}`);
  if (i < ATTEMPTS) await sleep(DELAY_MS);
}

console.error(`\n✗ ${ATTEMPTS} 次尝试后线上仍未与本次提交一致：\n  ${last}`);
console.error('  常见原因：Pages 还没部署完（延迟通常 1–2 分钟）、CDN 缓存、或这次 push 没能触发部署。');
process.exit(1);
