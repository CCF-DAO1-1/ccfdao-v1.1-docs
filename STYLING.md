# 样式配置指南

## 暗黑模式颜色自定义

在 `app/global.css` 中，你可以通过修改 `.dark` 类下的 CSS 变量来自定义暗黑模式的颜色。

### 可用的 CSS 变量

```css
.dark {
  /* 背景颜色 */
  --fd-background: 10 10 10;        /* 主背景 */
  --fd-card: 20 20 20;              /* 卡片背景 */
  --fd-popover: 20 20 20;           /* 弹出层背景 */
  
  /* 文字颜色 */
  --fd-foreground: 250 250 250;     /* 主文字 */
  --fd-muted-foreground: 160 160 160; /* 次要文字 */
  
  /* 边框颜色 */
  --fd-border: 40 40 40;            /* 边框 */
  
  /* 主题色 */
  --fd-primary: 0 204 155;          /* 主题色 (#00CC9B) */
  --fd-primary-foreground: 255 255 255; /* 主题色文字 */
}
```

### 颜色格式说明

注意：这些变量使用的是 **RGB 值（不带 rgb() 包裹）**，例如：
- `#00CC9B` → `0 204 155`
- `#0A0A0A` → `10 10 10`
- `#FFFFFF` → `255 255 255`

### 更多可自定义的变量

```css
.dark {
  /* 次要颜色 */
  --fd-secondary: 30 30 30;
  --fd-secondary-foreground: 250 250 250;
  
  /* 强调色 */
  --fd-accent: 30 30 30;
  --fd-accent-foreground: 250 250 250;
  
  /* 破坏性操作颜色（如删除按钮） */
  --fd-destructive: 239 68 68;
  --fd-destructive-foreground: 250 250 250;
  
  /* 输入框 */
  --fd-input: 40 40 40;
  --fd-ring: 0 204 155;
}
```

## 品牌色配置

品牌色 `#00CC9B` 已应用于：
- 所有标题（h1-h6）
- 粗体文字
- 侧边栏激活项
- 暗黑模式主题色

如需修改品牌色，在 `app/global.css` 中更改：

```css
:root {
  --brand-primary: #00CC9B; /* 修改这里 */
}

.dark {
  --fd-primary: 0 204 155; /* 同时修改这里（RGB 格式） */
}
```

## 应用图标配置

将你的图标文件放在 `public/` 目录下：
- `public/favicon.ico` - 主图标
- `public/icon.png` - PNG 备选
- `public/icon.svg` - SVG 矢量图

图标会自动被 Next.js 识别和使用。
