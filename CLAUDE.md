# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for **Episciences**, a scientific journal management platform. It uses **Astro Starlight** to generate a static bilingual (English/French) documentation website deployed at https://doc.episciences.org/.

## Development Commands

### Local commands

```bash
npm install       # Install dependencies
npm run dev       # Start development server at http://localhost:4321
npm run build     # Build static site in ./dist/
npm run preview   # Preview built site locally
npx astro check   # Type check content and config
npm run format    # Format all files with Prettier
```

### Docker commands

```bash
make build        # Build Docker image
make serve        # Start dev server at http://localhost:4321 via Docker
make build-site   # Generate static site in ./dist/ via Docker
make clean        # Remove generated dist/ and .astro/ folders
```

## Architecture

### Content Structure

- `src/content/docs/en/` - English documentation
- `src/content/docs/fr/` - French documentation (mirror structure)
- `src/styles/episciences.css` - Custom CSS overrides
- `src/assets/episciences.svg` - Global logo
- `public/favicon.png` - Site favicon

### Key Configuration

- `astro.config.mjs` - Main Astro and Starlight configuration
- `src/content.config.ts` - Starlight content layer collections setup
- `Dockerfile` - Node.js build & dev environment
- `.github/workflows/ci.yml` - Build and deploy to GitHub Pages on push to main
