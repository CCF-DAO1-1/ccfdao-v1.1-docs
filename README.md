# CCF DAO v1.1 Documentation

[中文文档](./README_ZH.md)

A comprehensive, multilingual documentation site for CKB Community Fund DAO(CCF DAO) v1.1, featuring developer guides, user manuals, and protocol specifications.

## Features

- **Multilingual Support** - Full documentation in English and Chinese
- **Modern Tech Stack** - Built with Next.js 15 and Fumadocs
- **Full-text Search** - Fast and accurate documentation search
- **Responsive Design** - Optimized for all devices

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation and Development

```bash
# Clone the repository
git clone https://github.com/ccf-dao1-1/ccfdao-v1.1-docs.git
cd ccfdao-v1.1-docs

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   └── [lang]/             # Internationalized routes
│       └── docs/           # Documentation pages
├── content/docs/           # Documentation content (MDX)
│   ├── en/                 # English documentation
│   └── zh/                 # Chinese documentation
├── components/             # React components
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Documentation

The documentation is organized into the following sections:

- **Overview** - Introduction to CCF DAO
- **User Guide** - How to participate in CCF DAO
- **Meta Rules** - Governance rules and voting mechanisms
- **Developer Docs** - Technical documentation for developers

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Fumadocs](https://fumadocs.dev/) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [MDX](https://mdxjs.com/) - Markdown with JSX

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
