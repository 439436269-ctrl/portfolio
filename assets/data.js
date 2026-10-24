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
    kicker: "SLEEP STORY · 成语连载",
    name: "晚安故事 · 1 岁宝宝的成语睡前故事",
    type: "内容系列",
    stage: "连载更新中 · EP19",
    live: true,
    date: "2026.10.20",
    desc: "面向 1 岁幼儿的睡前故事系列：每集从《中国成语故事》里选一则，原文只断句不改写，配慢速轻声 TTS、绘本风场景图与预折行字幕，做成 90–130 秒竖屏成片。EP01–EP19 已在 B站 / 抖音 / 视频号三平台连载，合集全序、每集双封面；B站已挂「来B站，睡个好觉」活动话题。产线全自动：每日 08:10 / 12:10 / 18:10 三档定时发布，20:10 补产到 3 集缓冲，发布前过 9 项 QA（分辨率、时长、配音能量、首句静音、亮度、faststart）。",
    tech: "全 AI 管线：Seedream 出图 · TTS 配音 · zoompan 运镜 · SRT 预折行 · 三平台自动发布 · 浏览器实测断行",
    links: [
      { kind: "bilibili", label: "B站 · 晚安故事合集（19 集）", url: "https://space.bilibili.com/34078814/channel/collectiondetail?sid=9321608" },
      { kind: "bilibili", label: "B站 · EP01 画蛇添足", url: "https://www.bilibili.com/video/BV13Spr68E6r" },
      { kind: "bilibili", label: "B站 · 最新 EP19", url: "https://www.bilibili.com/video/BV1Uent6LEVc" }
    ]
  },
  {
    idx: "06",
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
    idx: "07",
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
    idx: "08",
    kicker: "PLUGINS · DEEPSEEK HARNESS",
    name: "DSH 插件集 · 给 Harness 写的界面扩展",
    type: "插件",
    stage: "已发布 · 持续迭代",
    live: true,
    date: "2026.10.09",
    desc: "给 DeepSeek Harness 写的一套插件：侧栏「置顶会话」分组（原生行度量、就地搜索、跨工作区）；会话路径与接续（会话 header 一键复制接续块，并把多帧 zstd 会话日志解压成可读文件，让另一个会话接着干）；外加两个钢琴玩具——界面内滑动钢琴（按住横向滑动即刮奏）与聊天区右缘的滚动钢琴（按鼠标纵向位置出声，带「我的消息」小地图刻度，点一下跳到那条消息）；极空间 NAS 与 Docker 运维工具 dsh-zspace（19 个 zspace_* 工具，0.4.0 起把容器运维并进主插件：docker list / inspect / logs / op、引擎健康诊断与整机重启；同一网络直连 WebDAV、跨网络走云中转自动选路）；视频/音频预览 dsh-preview-media（原生播放器 + 带鉴权的 HTTP Range 流式路由，可拖进度、倍速、循环）；以及 AI 街机厅 dsh-ai-arcade（贪吃蛇与中国象棋——模型负责「想」，出策略卡、只解说；本地引擎负责「动」，60fps 规则与 alpha-beta 棋力全在本地，断网也照常能玩）；以及网页搜索插件 @vfvrpq/dsh-search（把 DeepSeek 官方 Search/Fetch 接口包成 deepseek_search / deepseek_fetch / deepseek_research 三个工具，返回带 rerank 分、权威度与发布时间的结构化结果）；以及 Blender 与 STL 两个文件预览插件——dsh-preview-blender（Blender headless 按文件版本导出缓存 GLB，零依赖 WebGL 视口 + 场景三角面/mm 包围盒/材质统计）与 dsh-preview-stl（Host 分块流式读取，浏览器解析二进制/ASCII 网格，算尺寸、体积、表面积与水密性）；以及垂直预览市场 dsh-preview-market（目录、已安装清单与安装入口，安装/更新委托 dsh-market 或 dsh CLI，不合并子插件代码）；以及预览圈选 dsh-preview-snip（所有预览类型都可快捷圈选，或进全能标注编辑器加方框、圆形、箭头、文字后再插入输入框；也可引用选中文字）。十二个包均已发到 npm（旧名 dsh-media-preview / dsh-blend-preview / dsh-stl-preview 已 deprecated，指向新名）；另有一个 MakerWorld 出货流水线 skill 包 dsh-makerworld（发在 GitHub，内置六个 skill：编排 mw-ship、建模骨架 blender-part、可打印性校核 print-part-check、文案合规 mw-listing-check、登录态 makerworld-session 与平台手册 makerworld-publish——把一个 3D 打印件从设计送到上架，每个失败模式一个原子）。",
    tech: "DSH 插件 · Web Audio 实时合成 · 手写零构建客户端 bundle · 带鉴权 Range 流式路由 · WebDAV/云中转双通道 · 本地规则引擎 + LLM 策略层 · 官方 Search/Fetch 结构化封装 · Blender headless GLB 导出 · STL 网格统计（体积/表面积/水密） · 垂直预览市场（目录/已安装清单） · 预览圈选/标注（方框/圆形/箭头/文字） · npm",
    links: [
      { kind: "npm", label: "@vfvrpq/dsh-pinned-sessions", url: "https://www.npmjs.com/package/@vfvrpq/dsh-pinned-sessions" },
      { kind: "npm", label: "dsh-session-path", url: "https://www.npmjs.com/package/dsh-session-path" },
      { kind: "npm", label: "dsh-piano", url: "https://www.npmjs.com/package/dsh-piano" },
      { kind: "npm", label: "dsh-scroll-piano", url: "https://www.npmjs.com/package/dsh-scroll-piano" },
      { kind: "npm", label: "dsh-zspace 0.4.0", url: "https://www.npmjs.com/package/dsh-zspace" },
      { kind: "npm", label: "dsh-preview-market", url: "https://www.npmjs.com/package/dsh-preview-market" },
      { kind: "npm", label: "dsh-preview-media", url: "https://www.npmjs.com/package/dsh-preview-media" },
      { kind: "npm", label: "dsh-preview-blender", url: "https://www.npmjs.com/package/dsh-preview-blender" },
      { kind: "npm", label: "dsh-preview-stl", url: "https://www.npmjs.com/package/dsh-preview-stl" },
      { kind: "npm", label: "dsh-preview-snip", url: "https://www.npmjs.com/package/dsh-preview-snip" },
      { kind: "npm", label: "dsh-ai-arcade", url: "https://www.npmjs.com/package/dsh-ai-arcade" },
      { kind: "npm", label: "@vfvrpq/dsh-search", url: "https://www.npmjs.com/package/@vfvrpq/dsh-search" }
    ]
  },
  {
    idx: "09",
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
  },
  {
    idx: "10",
    kicker: "SKILL PACK · DEEPSEEK HARNESS",
    name: "dsh-makerworld · 把 MakerWorld 出货流水线装进 agent",
    type: "插件",
    stage: "已发布 · v0.1.0",
    live: true,
    date: "2026.10.23",
    desc: "上面那件接水底座的「出货流程」，被固化成了一个 DSH skill 包：从设计到上架有六个互不相同的失败模式——打不出来、看不出、文案不合规、登录掉、静默未发布、3MF 传成 0 字节——每个模式一个原子 skill，每个原子都能单独测。包里是一个编排（mw-ship：设计 → 校核 → 渲染 → 文案 → 发布模型 → 加打印配置，含四道确认门）加五个原子（建模骨架 blender-part、可打印性校核 print-part-check、文案合规 mw-listing-check、登录态 makerworld-session、平台手册 makerworld-publish）。装完即用：插件在 ctx.skills 上注册一个 rank 600 的 provider，skill 随包走，不往 ~/.agents/skills 拷任何文件；你自己的同名 skill 会胜出，不会被遮蔽。判据不靠自我声明——建模脚本自报的体积与校核脚本独立解析同一 STL 的结果要对得上（模板件 47.1 vs 47.11 cm³）。另附可选的多子代理形态：主代理只做确认门，设计/文案/渲染/发布各派一个子代理，发布那一步独占浏览器会话、必须串行。",
    tech: "DSH skill provider（rank 600） · 零运行时依赖 · 手写 YAML frontmatter 解析 · 1 编排 + 5 原子 · Blender headless · 可打印性判据 · GitHub 直装",
    links: [
      { kind: "github", label: "dsh-makerworld 仓库", url: "https://github.com/439436269-ctrl/dsh-makerworld" }
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
