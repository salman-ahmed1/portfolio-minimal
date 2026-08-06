# Repository Guidelines

## Project Structure & Module Organization

This is an Astro 7 portfolio site styled with Tailwind CSS. Route files live in `src/pages/` (`index.astro` is the home page). Reusable page sections belong in `src/components/`, and shared document structure belongs in `src/layouts/Layout.astro`. Put site-wide CSS variables and base rules in `src/styles/global.css`.

Static files are served directly from `public/`: use `public/assets/` for project imagery, `public/logos/` for SVG logos, and `public/fonts/` for web fonts. Repository-level configuration is in `astro.config.mjs`, `tailwind.config.mjs`, and `tsconfig.json`.

## Build, Test, and Development Commands

Use Yarn, as indicated by the committed `yarn.lock`:

- `yarn dev`: start the local Astro development server.
- `yarn build`: run `astro check` for Astro/TypeScript diagnostics, then create the production build in `dist/`.
- `yarn preview`: serve the generated production build locally.
- `yarn astro --help`: view Astro CLI commands.

There is no separate unit-test framework or coverage target currently configured. Treat `yarn build` as the required validation step; also check changed sections in the browser at responsive widths.

## Coding Style & Naming Conventions

Follow the existing `.astro` style: two-space indentation, semicolons in frontmatter scripts, double-quoted imports and attributes where practical, and clear markup grouping. Name components in PascalCase (for example, `Testimonials.astro`); use lowercase, route-oriented page filenames. Keep Tailwind utility classes close to their markup and reuse semantic color tokens from `tailwind.config.mjs` and `global.css` instead of introducing arbitrary duplicate colors.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, lowercase summaries such as `added form` and `updated images added map`. Use a concise single-line subject describing the user-visible change; avoid unrelated formatting churn in the same commit.

Pull requests should explain the intent and key implementation details, link relevant issues when available, and include before/after screenshots or a short recording for visual changes. Confirm `yarn build` passes and call out any new static assets, external links, analytics, or deployment-related changes.

## Configuration & Content Safety

Do not commit secrets or private tracking identifiers. Keep public-facing content and images optimized, appropriately licensed, and referenced with paths rooted at `/` (for example, `/assets/preview.png`).
