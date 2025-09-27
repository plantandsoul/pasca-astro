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

