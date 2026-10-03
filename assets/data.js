/* 项目数据 —— 增删项目改这里即可（按启动时间从早到晚排列） */
const PROJECTS = [
  {
    idx: "01",
    featured: true,
    kicker: "FLAGSHIP · WEB MAP",
    name: "余姚周边 · 带娃出行图",
    type: "网页",
    stage: "已上线 · 持续运营",
    live: true,
    date: "2026.09.26",
    desc: "把「带娃出行四要素」画在一张地图上：8 套一日游 / 住一晚方案动线、285 个城市数据包、10300+ 条逐点清洗核验的景点数据，支持家人提议码共建与打卡合并。配套知乎专栏与公众号长文。",
    tech: "React · TypeScript · MapLibre · GitHub Pages",
    links: [
      { kind: "site", label: "在线访问", url: "https://439436269-ctrl.github.io/yuyao-baby-map/" },
      { kind: "zhihu", label: "知乎专栏", url: "https://zhuanlan.zhihu.com/p/2088912049325727861" },
      { kind: "wechat", label: "微信公众号", url: "https://mp.weixin.qq.com/s/s2J6PO_n8O18CxZlQvIqDA" },
      { kind: "feishu", label: "飞书数据资产表", url: "https://my.feishu.cn/base/SU9KbUYKoaMIPYsxp3ZcA1Nen1f" }
    ]
  },
  {
    idx: "02",
    kicker: "WEB MAP · FAN-MADE",
    name: "影视飓风《样片日记》拍摄路线图",
    type: "网页",
    stage: "已上线",
    live: true,
    date: "2026.09.27",
    desc: "把 B 站《样片日记》26 期的全球取景地搬上互动地图：点击地图节点展示对应信息，并可直达该期视频；小红书竖版视频笔记与抖音已同步发布。同款能力已抽成 npm 包 @vfvrpq/route-tour-map。",
    tech: "MapLibre · 26 期取景地 · npm 组件化",
    links: [
      { kind: "site", label: "在线访问", url: "https://439436269-ctrl.github.io/sample-diary-map/" },
      { kind: "bilibili", label: "《样片日记》B站合集", url: "https://space.bilibili.com/946974/lists/2046621?type=season" },
      { kind: "npm", label: "@vfvrpq/route-tour-map", url: "https://www.npmjs.com/package/@vfvrpq/route-tour-map" }
    ]
  },
  {
    idx: "03",
    kicker: "AI SHORT DRAMA · 双版本连载",
    name: "唐诗三百首 · 一首诗一出戏",
    type: "内容系列",
    stage: "连载更新中",
    live: true,
    date: "2026.09.28",
    desc: "一诗一剧：把《唐诗三百首》约 311 首（77 位诗人）每首拍成 30–90 秒微型剧情短剧。A 读诗版 25–27 秒逐句跟读，B 故事版 60–90 秒一诗一剧；TTS 配音、分镜、字幕、成片全 AI 管线，已在 B站 / 小红书 / 抖音 / 视频号四平台更新十余集。",
    tech: "全 AI 管线：TTS 配音 · 关键帧 · SRT 字幕 · 批量成片",
    links: [
      { kind: "bilibili", label: "B站 · EP01 读诗版", url: "https://www.bilibili.com/video/BV1Aiaj6vEkw" },
      { kind: "bilibili", label: "B站 · EP01 故事版", url: "https://www.bilibili.com/video/BV16NaE6eEVG" }
    ],
    note: "小红书 · 抖音 · 视频号同名连载中"
  },
  {
    idx: "04",
    kicker: "APP · PLAYFUL AI",
    name: "猫咪叫声翻译器",
    type: "App",
    stage: "已上线",
    live: true,
    date: "2026.09.30",
    desc: "猫语 ⇄ 人话双向互译：麦克风实时声纹分析 + 手动状态自动回翻猫语，收录 21 条真实猫叫片段（9 类情绪）做识别样例与情绪回放。网页 + Android APK，翻译记录同步飞书多维表格。",
    tech: "Web Audio 实时分析 · Android APK · 飞书同步",
    links: [
      { kind: "zhihu", label: "知乎专栏", url: "https://zhuanlan.zhihu.com/p/2088645856379642630" },
      { kind: "github", label: "GitHub 仓库", url: "https://github.com/439436269-ctrl/meow-translator" }
    ],
    note: "公众号同名文章已发表"
  },
  {
    idx: "05",
    kicker: "WEB MAP · INITIAL D",
    name: "一路向北 · AE86 秋名山决战路线图",
    type: "网页",
    stage: "已上线",
    live: true,
    date: "2026.10",
    desc: "用 Web 地球重现《头文字D》里 AE86 的三场秋名山决战：从空中俯冲至群马县榛名山（秋名山原型），红线为県道33号真实几何，标注 R1 / R2 / R3 决战节点与五连发卡弯——500 米内连续 5 个急弯，全线 ≥90° 急弯 12 处。配套知乎专栏与公众号文章。",
    tech: "MapLibre 地球视角 · OSM 真实几何 · 487 点轨迹实测",
    links: [
      { kind: "site", label: "在线访问", url: "https://439436269-ctrl.github.io/ae86-route-map/" },
      { kind: "zhihu", label: "知乎专栏", url: "https://zhuanlan.zhihu.com/p/2089803837565683612" },
      { kind: "wechat", label: "微信公众号", url: "https://mp.weixin.qq.com/s/UYt4wB4tYxvip3a0ANOwrA" }
    ]
  }
];

/* 公开但暂无介绍文章的项目 */
const OTHERS = [
  { name: "llm-cli", tag: "npm 包", desc: "GLM / DeepSeek 命令行客户端", url: "https://www.npmjs.com/package/@vfvrpq/llm-cli" },
  { name: "杭州求职链接手账", tag: "网页", desc: "官网 / 岗位链接静态站点", url: "https://439436269-ctrl.github.io/hangzhou-job-links/" },
  { name: "玉皇山公园亲子路线图", tag: "网页", desc: "GPS 照片路线图 + 旁白故事视频", url: "https://439436269-ctrl.github.io/yuhuangshan-park-map/" }
];

const META = {
  owner: "吕超杰",
  updated: "2026-10-03",
  source: "飞书多维表格「开发项目」",
  github: "https://github.com/439436269-ctrl"
};
