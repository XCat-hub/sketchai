# 修改历史

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
