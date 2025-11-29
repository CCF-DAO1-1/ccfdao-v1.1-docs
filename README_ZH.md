# CCF DAO v1.1 文档

[English](./README.md)

CKB Community Fund DAO(CCF DAO) v1.1 综合性多语言文档站点，包含开发者指南、用户手册和协议规范。

## 特性

- **多语言支持** - 完整的中英文文档
- **现代技术栈** - 基于 Next.js 15 和 Fumadocs 构建
- **全文搜索** - 快速准确的文档搜索
- **响应式设计** - 适配所有设备

## 快速开始

### 环境要求

- Node.js 18+
- pnpm（推荐）或 npm

### 安装

```bash
# 克隆仓库
git clone https://github.com/ccf-dao1-1/ccfdao-v1.1-docs.git
cd ccfdao-v1.1-docs

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000)。

### 生产环境构建

```bash
pnpm build
pnpm start
```

## 项目结构

```
├── app/                    # Next.js 应用目录
│   └── [lang]/             # 国际化路由
│       └── docs/           # 文档页面
├── content/docs/           # 文档内容 (MDX)
│   ├── en/                 # 英文文档
│   └── zh/                 # 中文文档
├── components/             # React 组件
├── lib/                    # 工具函数
└── public/                 # 静态资源
```

## 文档内容

文档分为以下几个部分：

- **概述** - CCF DAO 简介
- **用户指南** - 如何参与 CCF DAO
- **元规则** - 治理规则和投票机制
- **开发者文档** - 面向开发者的技术文档

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [Fumadocs](https://fumadocs.dev/) - 文档框架
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [MDX](https://mdxjs.com/) - Markdown + JSX

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。