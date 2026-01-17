# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for **Episciences**, a scientific journal management platform. It uses **MkDocs Material** to generate a static bilingual (English/French) documentation website deployed at https://doc.episciences.org/.

## Development Commands

All commands use Docker. Build the image first with `make build`.

```bash
make build        # Build Docker image (required first)
make serve        # Start dev server at http://localhost:8000
make build-site   # Generate static site in ./site/
make clean        # Remove generated site/ folder
make version      # Show MkDocs version
```

### Docker Compose commands (cross-platform, supports V1 and V2)

```bash
make up           # Start container in background
make down         # Stop and remove container
make stop         # Stop container without removing
make restart      # Restart container
make logs         # Show container logs
```

The Makefile auto-detects `docker compose` (V2) or `docker-compose` (V1).

On Windows without Make, use docker compose directly:

```bash
docker compose up -d      # Start (or docker-compose for V1)
docker compose stop       # Stop
docker compose down       # Remove
docker compose restart    # Restart
docker compose logs -f    # Logs
```

## Architecture

### Content Structure

- `docs/en/` - English documentation (default language)
- `docs/fr/` - French documentation (mirror structure)
- `docs/assets/` - Custom CSS (`episciences.css`)
- `docs/overrides/` - Material theme customizations
- `docs/images/` - Global images (favicon, logos)

### Key Configuration

- `mkdocs.yml` - Main MkDocs configuration (theme, plugins, navigation, i18n)
- `Dockerfile` - Python 3.12-alpine with MkDocs and all plugins
- `.github/workflows/ci.yml` - Auto-deploy to GitHub Pages on push to main

### MkDocs Plugins in Use

- `mkdocs-static-i18n` - Bilingual support (folder-based structure)
- `mkdocs-git-revision-date-localized-plugin` - Shows last edit dates
- `mkdocs-minify-plugin` - HTML/CSS/JS minification
- `mkdocs-video` - Video embedding support
- `mkdocs-print-site-plugin` - Print-friendly version
- `mkdocs-encriptmail-plugin` - Email obfuscation

### Markdown Extensions Available

- Admonitions (`!!! note`, `!!! warning`, etc.)
- Footnotes, abbreviations, definition lists
- Attribute lists, tables
- PyMdownX: details, superfences

## Content Guidelines

When adding or editing documentation:

- Mirror the same structure in both `docs/en/` and `docs/fr/`
- Place language-specific images in `docs/en/img/` and `docs/fr/img/`
- The navigation is auto-generated from file names (no explicit nav config)
- Use `nav_translations` in mkdocs.yml if a page title needs translation
