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
      { kind: "bilibili", label: "B站 · 我们的投稿", url: "https://www.bilibili.com/video/BV16Baq69Eo5" },
      { kind: "site", label: "在线访问", url: "https://439436269-ctrl.github.io/sample-diary-map/" },
      { kind: "bilibili", label: "《样片日记》B站合集", url: "https://space.bilibili.com/946974/lists/2046621?type=season" },
      { kind: "npm", label: "@vfvrpq/route-tour-map", url: "https://www.npmjs.com/package/@vfvrpq/route-tour-map" }
    ]
  },
  {
    idx: "03",
    kicker: "APP · MULTI-PLATFORM",
    name: "轻记 TODO",
    type: "App",
    stage: "已上线 · 持续迭代",
    live: true,
    date: "2026.09.27",
    desc: "多端任务清单：网页 + Android + iOS 一键安装，与你自己的飞书多维表格秒级双向同步，截止前多档提醒直达系统通知。落地页含网页版、APK 与 IPA 直链；配套知乎专栏与公众号文章。",
    tech: "飞书多维表格同步 · 本地优先 · GitHub Pages",
    links: [
      { kind: "site", label: "落地页", url: "https://439436269-ctrl.github.io/qingji-todo-web/" },
      { kind: "github", label: "GitHub 仓库", url: "https://github.com/439436269-ctrl/qingji-todo" },
      { kind: "zhihu", label: "知乎专栏", url: "https://zhuanlan.zhihu.com/p/2089678039181543278" }
    ],
    note: "公众号同名文章已发表"
  },
  {
    idx: "04",
    kicker: "AI SHORT DRAMA · 双版本连载",
    name: "唐诗三百首 · 一首诗一出戏",
    type: "内容系列",
    stage: "连载更新中",
    live: true,
    date: "2026.09.28",
    desc: "一诗一剧：把《唐诗三百首》约 311 首（77 位诗人）每首拍成 30–90 秒微型剧情短剧。A 读诗版 25–27 秒逐句跟读，B 故事版 60–90 秒一诗一剧；TTS 配音、分镜、字幕、成片全 AI 管线，已在 B站 / 抖音 / 视频号三平台连载至 EP150（B站两个合集各 150 集，持续更新）。",
    tech: "全 AI 管线：TTS 配音 · 关键帧 · SRT 字幕 · 批量成片",
    links: [
      { kind: "bilibili", label: "B站 · EP01 读诗版", url: "https://www.bilibili.com/video/BV1Aiaj6vEkw" },
      { kind: "bilibili", label: "B站 · EP01 故事版", url: "https://www.bilibili.com/video/BV16NaE6eEVG" },
      { kind: "github", label: "配套插件（19 个 skill）", url: "https://github.com/439436269-ctrl/dsh-video-pipeline" }
    ],
    note: "小红书 · 抖音 · 视频号同名连载中"
  },
  {
    idx: "05",
    kicker: "APP · PLAYFUL AI",
    name: "猫咪叫声翻译器",
    type: "App",
    stage: "已上线",
    live: true,
    date: "2026.09.30",
    desc: "猫语 ⇄ 人话双向互译：麦克风实时声纹分析 + 手动状态自动回翻猫语，收录 21 条真实猫叫片段（9 类情绪）做识别样例与情绪回放。网页 + Android APK，翻译记录同步飞书多维表格。",
    tech: "Web Audio 实时分析 · Android APK · 飞书同步",
    links: [
      { kind: "site", label: "落地页", url: "https://439436269-ctrl.github.io/meow-translator-web/" },
      { kind: "zhihu", label: "知乎专栏", url: "https://zhuanlan.zhihu.com/p/2088645856379642630" },
      { kind: "github", label: "GitHub 仓库", url: "https://github.com/439436269-ctrl/meow-translator" }
    ],
    note: "公众号同名文章已发表"
  },
  {
    idx: "06",
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
  },
  {
    idx: "07",
    kicker: "PLUGINS · DEEPSEEK HARNESS",
    name: "DSH 插件集 · 给 Harness 写的界面扩展",
    type: "插件",
    stage: "已发布 · 持续迭代",
    live: true,
    date: "2026.10.09",
    desc: "给 DeepSeek Harness 写的一套插件：侧栏「置顶会话」分组（原生行度量、就地搜索、跨工作区）；会话路径与接续（会话 header 一键复制接续块，并把多帧 zstd 会话日志解压成可读文件，让另一个会话接着干）；外加两个钢琴玩具——界面内滑动钢琴（按住横向滑动即刮奏）与聊天区右缘的滚动钢琴（按鼠标纵向位置出声，带「我的消息」小地图刻度，点一下跳到那条消息）；极空间 NAS 与 Docker 运维工具 dsh-zspace（19 个 zspace_* 工具，0.4.0 起把容器运维并进主插件：docker list / inspect / logs / op、引擎健康诊断与整机重启；同一网络直连 WebDAV、跨网络走云中转自动选路）；视频/音频预览 dsh-media-preview（原生播放器 + 带鉴权的 HTTP Range 流式路由，可拖进度、倍速、循环）；以及 AI 街机厅 dsh-ai-arcade（贪吃蛇与中国象棋——模型负责「想」，出策略卡、只解说；本地引擎负责「动」，60fps 规则与 alpha-beta 棋力全在本地，断网也照常能玩）；以及网页搜索插件 @vfvrpq/dsh-search（把 DeepSeek 官方 Search/Fetch 接口包成 deepseek_search / deepseek_fetch / deepseek_research 三个工具，返回带 rerank 分、权威度与发布时间的结构化结果）；以及 Blender 与 STL 两个文件预览插件——dsh-blend-preview（Blender headless 按文件版本导出缓存 GLB，零依赖 WebGL 视口 + 场景三角面/mm 包围盒/材质统计）与 dsh-stl-preview（Host 分块流式读取，浏览器解析二进制/ASCII 网格，算尺寸、体积、表面积与水密性）。十个包均已发到 npm；另有一个 MakerWorld 出货流水线 skill 包 dsh-makerworld（发在 GitHub，内置六个 skill：编排 mw-ship、建模骨架 blender-part、可打印性校核 print-part-check、文案合规 mw-listing-check、登录态 makerworld-session 与平台手册 makerworld-publish——把一个 3D 打印件从设计送到上架，每个失败模式一个原子）。",
    tech: "DSH 插件 · Web Audio 实时合成 · 手写零构建客户端 bundle · 带鉴权 Range 流式路由 · WebDAV/云中转双通道 · 本地规则引擎 + LLM 策略层 · 官方 Search/Fetch 结构化封装 · Blender headless GLB 导出 · STL 网格统计（体积/表面积/水密） · npm",
    links: [
      { kind: "npm", label: "@vfvrpq/dsh-pinned-sessions", url: "https://www.npmjs.com/package/@vfvrpq/dsh-pinned-sessions" },
      { kind: "npm", label: "dsh-session-path", url: "https://www.npmjs.com/package/dsh-session-path" },
      { kind: "npm", label: "dsh-piano", url: "https://www.npmjs.com/package/dsh-piano" },
      { kind: "npm", label: "dsh-scroll-piano", url: "https://www.npmjs.com/package/dsh-scroll-piano" },
      { kind: "npm", label: "dsh-zspace 0.4.0", url: "https://www.npmjs.com/package/dsh-zspace" },
      { kind: "npm", label: "dsh-media-preview", url: "https://www.npmjs.com/package/dsh-media-preview" },
      { kind: "npm", label: "dsh-ai-arcade", url: "https://www.npmjs.com/package/dsh-ai-arcade" },
      { kind: "npm", label: "@vfvrpq/dsh-search", url: "https://www.npmjs.com/package/@vfvrpq/dsh-search" },
      { kind: "npm", label: "dsh-blend-preview", url: "https://www.npmjs.com/package/dsh-blend-preview" },
      { kind: "npm", label: "dsh-stl-preview", url: "https://www.npmjs.com/package/dsh-stl-preview" },
      { kind: "github", label: "dsh-makerworld · MakerWorld 流水线", url: "https://github.com/439436269-ctrl/dsh-makerworld" }
    ]
  },
  {
    idx: "08",
    kicker: "3D PRINTING · MAKERWORLD",
    name: "盘子架接水底座 · 让竹架不再滴水",
    type: "3D 模型",
    stage: "已发布 · 已实机打印",
    live: true,
    date: "2026.10.21",
    desc: "厨房的竹制盘子架滴水，台面永远是湿的——市面上的接水盘要么尺寸不对，要么是软胶。给它配了一个接水底座：整体 322×129×16 mm，因为一块打不下 306 mm，拆成两块各自完整的水盘并排放，不用胶、不用榫，也就没有漏水路径；每侧一条平坐面把方木抬到水面之上（坐面高 9 mm、溢流堰 7.5 mm，留 1.5 mm 余量），坐面高度跟方木多宽无关，所以换一副架子也照样坐得稳；中间那道矮墙顺手兼作跨中加强筋。单块 161×129×16，240×240 的床同板打完、免支撑，98.5 cm³ / 113 g，PETG 打印；已实机装配验证，模型与打印配置发布在 MakerWorld。",
    tech: "Blender headless 参数化建模 · CSG 布尔 · 非流形校核（0 条） · 水密性判断 · PETG 免支撑 · MakerWorld",
    links: [
      { kind: "site", label: "MakerWorld 模型页", url: "https://makerworld.com.cn/zh/models/3132492-pan-zi-jia-jie-shui-di-zuo-liang-kuai-du-li-shui-p" }
    ]
  }
];

/* 公开但暂无介绍文章的项目（按启动时间排列） */
const OTHERS = [
  { name: "llm-cli", tag: "npm 包", desc: "GLM / DeepSeek 命令行客户端", url: "https://www.npmjs.com/package/@vfvrpq/llm-cli" },
  { name: "杭州求职链接手账", tag: "网页", desc: "官网 / 岗位链接静态站点", url: "https://439436269-ctrl.github.io/hangzhou-job-links/" },
  { name: "玉皇山公园亲子路线图", tag: "网页", desc: "GPS 照片路线图 + 旁白故事视频", url: "https://439436269-ctrl.github.io/yuhuangshan-park-map/" },
  { name: "Link2QR · 链接转二维码 Chrome 插件", tag: "插件", desc: "类似草料的链接转二维码 Chrome 扩展：一键把当前网页链接或任意文本生成二维码，支持下载 PNG、复制图片、右键菜单", url: "https://439436269-ctrl.github.io/link2qr/" },
  { name: "baby-blocks 婴儿积木", tag: "开源", desc: "汉诺塔/不倒翁/12生肖,OpenSCAD参数化+硅胶浇注", url: "https://github.com/439436269-ctrl/baby-blocks" },
];

const META = {
  owner: "vfvrpq",
  updated: "2026-10-23",
  source: "飞书多维表格「开发项目」",
  github: "https://github.com/439436269-ctrl"
};
