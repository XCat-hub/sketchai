# 修改历史

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
