# Astro front-end for PASCA

## 🦾 Technologies

- [Astro](https://docs.astro.build) is the framework used to build the website.
- Astro supports the use of components from other frameworks like [React](https://react.dev/).
- Deployed with [Netlify](https://www.netlify.com/).
- The CMS is in a separate repo and uses [Strapi](https://docs.strapi.io/).

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Clone the `.env` files with `cp .env.dev .env` and fill in the variables
4. Start the development server with `pnpm dev`

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

### How to codegen the types
The types in `src/__generated__/*` are automatically generated with a codegen script. This saves us from having to hand-write the schemas we already write on the backend and reduces risk of falling out of sync.

These types should be updated anytime the backend schemas are modified. The steps to do this are:
1. Start the backend locally (`npm run develop`).
2. Run `npm run openapi` in the backend. This lets you serve the [OpenAPI](https://www.openapis.org/) json spec at `localhost:1337/documentation/openapi.json`.
3. Run `pnpm run codegen` in the front-end. This ingests the OpenAPI spec and automatically generates corresponding typescript types.
