# 修改历史

## 2026-06-27 — 同步应用图标与名称为 Sketch AI

### 需求
网站图标改为 ColoringBook 应用 `ic_launcher`，品牌名称与 Android 应用一致为 **Sketch AI**。

### 方案
1. 从 `Development/projects/android/ColoringBook/app/src/main/res/mipmap-xxxhdpi/ic_launcher.webp` 导出 `favicon.png`
2. `sketchai` Astro 站点：`site.ts`、布局、组件、法律文案中的 SketchAI → Sketch AI
3. `xcat-hub.github.io` 静态法律页同步替换图标与名称

### 修改文件
- `sketchai/public/favicon.png`（新增，删除 favicon.svg）
- `sketchai/src/data/site.ts`
- `sketchai/src/layouts/BaseLayout.astro`
- `sketchai/src/components/*.astro`
- `sketchai/src/content/legal/*.md`
- `sketchai/src/pages/PRIVACY_POLICY.astro`
- `sketchai/src/pages/TERMS_OF_SERVICE.astro`
- `xcat-hub.github.io/favicon.png`、法律页 HTML

---

## 2026-06-27 — 创建 xcat-hub.github.io 组织根站点

### 需求
创建 `xcat-hub.github.io` 用户站点仓库，将 `app-ads.txt`、隐私政策、服务条款同步到组织根路径，使以下 URL 可直接访问：
- `https://xcat-hub.github.io/app-ads.txt`
- `https://xcat-hub.github.io/PRIVACY_POLICY.html`
- `https://xcat-hub.github.io/TERMS_OF_SERVICE.html`

### 方案
1. 新建独立仓库 `/Users/wugengzhao/Documents/GitHub/xcat-hub.github.io`
2. 从 `sketchai` 的 `gh-pages` 分支导出法律页面 HTML 及样式资源
3. 将路径前缀 `/sketchai/` 改为根路径 `/`，导航链接指向营销站 `https://xcat-hub.github.io/sketchai/`
4. 根目录 `index.html` 跳转到 SketchAI 营销站

### 修改文件
- `xcat-hub.github.io/`（新建独立仓库，含 8 个文件）

---

## 2026-05-30 — 修复网站 Logo / Favicon 无法显示

### 问题
页头 Logo 显示为破损图片图标，`favicon` 同样无法加载。

### 原因
`astro.config.mjs` 中 `base: '/sketchai'` 且 `trailingSlash: 'ignore'` 时，`import.meta.env.BASE_URL` 为 `/sketchai`（无尾部斜杠）。模板中 `${BASE_URL}favicon.svg` 被拼成 `/sketchaifavicon.svg`，导致 404。页脚法律页面链接也存在相同拼接问题。

### 方案
在 `BaseLayout.astro` 中规范化 `base` 变量，确保始终以 `/` 结尾后再拼接资源与子路径。

### 修改文件
- `src/layouts/BaseLayout.astro`

---

## 2026-05-30 — 修复 How It Works 步骤编号与标题重叠

### 问题
How It Works 区块中，步骤编号（1、2、3）圆形徽章与标题文字（Draw / Describe / Generate）发生重叠。

### 原因
`.step-number` 使用 `position: absolute` 定位在卡片左上角，而标题 `<h3>` 未预留左侧空间，导致文字与徽章重叠。

### 方案
- 将编号与标题包裹在 `.step-header` 容器中
- 使用 `display: flex` + `align-items: center` + `gap` 横向排列编号与标题
- 移除绝对定位及多余的 `padding-top`

### 修改文件
- `src/components/HowItWorks.astro`
