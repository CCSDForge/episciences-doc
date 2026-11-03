# Episciences Documentation

[![Deploy](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml/badge.svg)](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Starlight](https://img.shields.io/badge/docs-Starlight-blue?logo=astro)](https://starlight.astro.build/)
[![Astro](https://img.shields.io/badge/astro-v7-BC52EE?logo=astro)](https://astro.build/)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier)](https://prettier.io/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen?logo=renovatebot)](https://github.com/apps/renovate)

Official documentation for the [Episciences](https://www.episciences.org/) platform, built with [Astro Starlight](https://starlight.astro.build/).

**Live documentation:** [doc.episciences.org](https://doc.episciences.org/)

---

> 📖 **Comprehensive Guide:** Looking for how to configure navigation menus (left sidebar and right table of contents), add bilingual content, or deploy to production? Check out the **[User & Developer Guide (docs/GUIDE.md)](docs/GUIDE.md)**.

---

## Quick Start (Docker - Cross-Platform / Windows, Linux, macOS)

No need to install Node.js! If you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed:

```bash
# Clone the repository
git clone https://github.com/CCSDForge/episciences-doc.git
cd episciences-doc

# Start development server
docker compose up
```

Open **[http://localhost:4321](http://localhost:4321)** in your browser. Live reloading is automatically active (including on Windows mounts).

To stop the server:

```bash
docker compose down
```

---

## Quick Start (Local Development with Node.js)

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ or v22+)
- [Git](https://git-scm.com/downloads)

```bash
# Clone the repository
git clone https://github.com/CCSDForge/episciences-doc.git
cd episciences-doc

# Install dependencies
npm install

# Start development server
npm run dev
# Open http://localhost:4321
```

_(On Linux / macOS, you can also use `make build` and `make serve`)_

---

## Common Commands

| Task                    | With Docker (Windows / Linux / macOS)               | Without Docker         |
| ----------------------- | --------------------------------------------------- | ---------------------- |
| **Dev server**          | `docker compose up`                                 | `npm run dev`          |
| **Production build**    | `docker compose run --rm docs npm run build`        | `npm run build`        |
| **Check types & links** | `docker compose run --rm docs npx astro check`      | `npx astro check`      |
| **Format code**         | `docker compose run --rm docs npm run format`       | `npm run format`       |
| **Check formatting**    | `docker compose run --rm docs npm run format:check` | `npm run format:check` |

---

## Project Structure

```text
.
├── astro.config.mjs          # Starlight & Astro configuration (menus, i18n, plugins)
├── package.json              # NPM dependencies and scripts
├── Makefile                  # Unix makefile shortcuts
├── Dockerfile                # Docker image definition
├── docker-compose.yml        # Docker compose configuration
├── docs/
│   └── GUIDE.md              # Detailed user and developer guide
├── src/
│   ├── assets/               # Logos and static assets
│   ├── content.config.ts     # Content collections configuration
│   ├── content/
│   │   └── docs/             # Documentation content
│   │       ├── en/           # English documentation
│   │       └── fr/           # French documentation
│   └── styles/               # Custom CSS styles
└── public/                   # Public static files (favicon, etc.)
```
