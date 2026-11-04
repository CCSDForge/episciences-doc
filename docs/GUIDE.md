# Episciences Documentation - User & Developer Guide

This document is the comprehensive guide for maintaining, configuring, and deploying the [Episciences](https://www.episciences.org/) documentation website ([doc.episciences.org](https://doc.episciences.org/)).

---

## Table of Contents

1. [Architecture & Technology Stack](#1-architecture--technology-stack)
2. [Quick Start with Docker (Cross-Platform / Windows / Linux / macOS)](#2-quick-start-with-docker-cross-platform--windows--linux--macos)
3. [Local Development (Without Docker)](#3-local-development-without-docker)
4. [Project Structure](#4-project-structure)
5. [Configuring Navigation Menus](#5-configuring-navigation-menus)
   - [Left Menu: Sidebar Navigation](#a-left-menu-sidebar-navigation)
   - [Right Menu: Table of Contents ("On this page")](#b-right-menu-table-of-contents-on-this-page)
6. [Managing Content & Translations](#6-managing-content--translations)
7. [Code Quality & Formatting](#7-code-quality--formatting)
8. [Build & Production Deployment](#8-build--production-deployment)
9. [Windows-Specific Notes & Troubleshooting](#9-windows-specific-notes--troubleshooting)

---

## 1. Architecture & Technology Stack

The documentation is powered by:

- **[Astro](https://astro.build/)** (v7) – Fast modern web framework.
- **[Starlight](https://starlight.astro.build/)** – Official documentation theme for Astro with built-in search, i18n, and responsive navigation.
- **Bilingual Content**: English (`/en/`, default) and French (`/fr/`).
- **Docker Compose**: Containerized development and build environment ensuring cross-platform consistency.
- **GitHub Actions**: Continuous Deployment automatically pushing static builds to GitHub Pages.

---

## 2. Quick Start with Docker (Cross-Platform / Windows / Linux / macOS)

Using Docker requires **zero local Node.js installation**. It works identically in Windows PowerShell/Command Prompt, macOS Terminal, and Linux Bash.

### Prerequisites

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows / macOS) or Docker Engine + Docker Compose (Linux).

### Development Server

From the project root directory, run:

```bash
# Start the documentation server
docker compose up
```

- Open **[http://localhost:4321](http://localhost:4321)** in your browser.
- **Hot Reload (HMR)**: Any file edit is automatically detected and refreshed live in the browser.
- To run in background: `docker compose up -d`
- To stop the server: `docker compose down`

### Everyday Tasks with Docker

All maintenance scripts can be executed via Docker:

```bash
# Build the production static site in ./dist/
docker compose run --rm docs npm run build

# Check for TypeScript errors and broken links
docker compose run --rm docs npx astro check

# Format all files automatically with Prettier
docker compose run --rm docs npm run format

# Check formatting without modifying files
docker compose run --rm docs npm run format:check
```

---

## 3. Local Development (Without Docker)

If you prefer developing directly on your host machine:

### Prerequisites

- **Node.js**: version `20` or `22+` (version 22 recommended)
- **npm**: version `10+`

### Installation & Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
# The site is available at http://localhost:4321

# 3. Build production bundle (into dist/)
npm run build

# 4. Preview built production site locally
npm run preview

# 5. Type-check content and configuration
npx astro check

# 6. Format files with Prettier
npm run format
```

_(Note for Linux/macOS users: A `Makefile` is also available with shortcuts such as `make dev`, `make build`, `make format`, etc.)_

---

## 4. Project Structure

```text
epi-doc/
├── astro.config.mjs          # Main Astro & Starlight configuration (menus, i18n, plugins)
├── package.json              # NPM dependencies and scripts
├── Makefile                  # Unix helper commands
├── Dockerfile                # Node 22 build & runtime image
├── docker-compose.yml        # Docker compose service setup
├── docs/
│   └── GUIDE.md              # This user & developer guide
├── public/                   # Static files served as-is (e.g. favicon.png)
└── src/
    ├── assets/               # Global static assets (e.g. episciences.svg logo)
    ├── content.config.ts     # Starlight content layer collections setup
    ├── content/
    │   └── docs/             # Markdown documentation pages
    │       ├── en/           # English documentation (default)
    │       └── fr/           # French documentation (mirrored structure)
    └── styles/
        └── episciences.css   # Custom CSS overrides
```

---

## 5. Configuring Navigation Menus

The menus are configured in `astro.config.mjs`.

### A. Left Menu: Sidebar Navigation

The left sidebar navigation is defined by the `sidebar` array in `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: "Authors & Submission", // Group title in English
    translations: { fr: "Auteurs & Soumission" }, // Group title in French
    items: [
      { slug: "submission" }, // Maps to en/submission.md & fr/submission.md
      { slug: "account" },
      { slug: "authoreditorcommunication" },
    ],
  },
  {
    label: "Journal Website",
    translations: { fr: "Site web de la revue" },
    collapsed: false, // true = collapsed by default
    items: [{ slug: "website" }],
  },
  // ...
];
```

#### How to Add a New Page to the Left Sidebar:

1. Create both language files:
   - `src/content/docs/en/my-new-page.md`
   - `src/content/docs/fr/my-new-page.md`
2. Open `astro.config.mjs` and add `{ slug: "my-new-page" }` to the `items` list of the desired section.

#### Page-Level Sidebar Customization (YAML Frontmatter):

You can adjust sidebar behavior directly within an individual Markdown file:

```yaml
---
title: "Advanced Submission Settings"
sidebar:
  label: "Advanced Settings" # Overrides the menu label for this page
  order: 2 # Sort order index when auto-sorting
  hidden: true # Set to true to hide this page from the sidebar
  badge:
    text: "New"
    variant: "tip" # Available variants: tip, note, danger, success, caution
---
```

---

### B. Right Menu: Table of Contents ("On this page")

The right sidebar provides a table of contents generated **automatically** from headings in the active page.

#### Global Configuration:

In `astro.config.mjs`:

```javascript
tableOfContents: {
  minHeadingLevel: 2, // Starts at ## headings (H2)
  maxHeadingLevel: 3, // Includes down to ### headings (H3)
},
```

To include sub-headings down to `####` (H4), set `maxHeadingLevel: 4`.

#### Page-Level Table of Contents Customization (YAML Frontmatter):

You can override or disable the Table of Contents for a specific document:

- **Hide the right menu completely:**

  ```yaml
  ---
  title: "Welcome Page"
  tableOfContents: false
  ---
  ```

- **Change heading depth for this specific document:**
  ```yaml
  ---
  title: "In-Depth Technical Reference"
  tableOfContents:
    minHeadingLevel: 2
    maxHeadingLevel: 4
  ---
  ```

---

## 6. Managing Content & Translations

### Bilingual Consistency

Because the platform documentation is bilingual, every document exists in both:

- `src/content/docs/en/<slug>.md`
- `src/content/docs/fr/<slug>.md`

Keep the slugs and filenames identical between `en/` and `fr/`.

### Admonitions / Callout Blocks

Use Starlight callout blocks to highlight key information:

```markdown
:::note
General context and background information.
:::

:::tip
Helpful tip or best practice.
:::

:::caution
Warning about common pitfalls or limitations.
:::

:::danger
Critical warning for operations with data loss or security implications.
:::
```

### Images

Store page-specific images in the subfolder alongside the content (e.g. `src/content/docs/en/img/`) or in `src/assets/`. Reference them in Markdown with standard syntax:

```markdown
![Interface overview](img/submission-overview.png "Submission Overview")
```

_Note: Image zoom is automatically enabled via the `starlight-image-zoom` plugin._

---

## 7. Code Quality & Formatting

Before committing your changes:

```bash
# 1. Type check and broken link validation
docker compose run --rm docs npx astro check
# (or locally: npx astro check)

# 2. Check formatting
docker compose run --rm docs npm run format:check
# (or locally: npm run format:check)

# 3. Auto-format all markdown, yaml, and source files
docker compose run --rm docs npm run format
# (or locally: npm run format)
```

---

## 8. Build & Production Deployment

### 1. Local Production Build

Test the production build before submitting changes:

```bash
docker compose run --rm docs npm run build
# (or locally: npm run build)
```

The output is written to `./dist/`.

To test the generated static build locally with the preview server:

```bash
npm run preview
```

### 2. Automated Production Deployment (CI/CD)

The deployment is automated via the GitHub Actions workflow `.github/workflows/ci.yml`:

- Trigger: A push or merge to the `main` or `master` branch.
- Workflow:
  1. Sets up Node.js v22.
  2. Runs a clean install (`npm ci`).
  3. Builds the static site (`npm run build`).
  4. Deploys the static `./dist/` directory to **GitHub Pages**.
- The production site is published live at **[https://doc.episciences.org/](https://doc.episciences.org/)**.

### 3. LLM Agent Documentation & Clean PDF Export

- **LLM Agent Endpoints**: Each production build automatically compiles optimized Markdown documentation for AI agents and LLMs:
  - `/llms.txt` : Root manifest listing available documentation sets.
  - `/_llms-txt/english-documentation.txt` : Complete English documentation in a single file.
  - `/_llms-txt/documentation-en-français.txt` : Complete French documentation in a single file.
  - `/llms-small.txt` : Condensed documentation for smaller LLM context windows.
- **Print & PDF Export**: Any page can be printed or exported to PDF using the browser's standard Print dialog (`Ctrl+P` / `Cmd+P`). All sidebars, navigation bars, search buttons, and interactive widgets are automatically omitted from the printed layout via native `@media print` styles in `src/styles/episciences.css`.

---

## 9. Windows-Specific Notes & Troubleshooting

### Docker on Windows

- Use **Docker Desktop with the WSL 2 backend** for best performance.
- In `docker-compose.yml`, the environment variable `CHOKIDAR_USEPOLLING=true` is enabled to ensure file changes made on Windows hosts are immediately detected inside the Linux container.

### Line Endings (CRLF vs LF)

Git on Windows may convert LF line endings to CRLF. To prevent unexpected Prettier diffs, ensure your Git configuration uses LF:

```bash
git config core.autocrlf input
```

### Port Conflicts

If port `4321` is already in use by another application on your machine, you can change the host port in `docker-compose.yml`:

```yaml
ports:
  - "8080:4321" # Access via http://localhost:8080
```
