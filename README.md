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

## Prerequisites

- [Node.js](https://nodejs.org/) (v20+ or v22+)
- [Git](https://git-scm.com/downloads)
- [Docker](https://docs.docker.com/engine/install/) (optional)

## Quick Start (Local development)

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

## Quick Start (Docker)

```bash
# Build the Docker image
make build

# Start the development server
make serve
# Open http://localhost:4321
```

## Project Structure

```
.
├── astro.config.mjs          # Starlight & Astro configuration
├── package.json
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
