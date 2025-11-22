# ccfdao-v1.1-docs

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

A `source.config.ts` config file has been included, you can customise different options like frontmatter schema.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs

## Public Assets and Favicon

This project uses the `public/` directory for static assets that are served
directly by Next.js.

### Favicon and App Icons

To customize the application icon, place your files inside the `public/`
directory. Common options:

- `public/favicon.ico` – classic ICO format (recommended size: 32x32 or 16x16)
- `public/icon.png` – PNG format (recommended size: 32x32)
- `public/icon.svg` – SVG format (scalable vector)

The simplest way is to name your main icon `favicon.ico` and put it in the
`public/` directory.

You can generate favicons using online tools such as:

- https://favicon.io/
- https://realfavicongenerator.net/

### Example Structure

```text
public/
  favicon.ico     # main favicon
  icon.png        # PNG fallback (optional)
  apple-icon.png  # Apple touch icon (optional)
```

Next.js will automatically serve these files at the root URLs, for example:

- `http://localhost:3000/favicon.ico`
- `http://localhost:3000/icon.png`
