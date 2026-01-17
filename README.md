# Episciences Documentation

[![Deploy](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml/badge.svg)](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

Official documentation for the [Episciences](https://www.episciences.org/) platform, built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

**Live documentation:** [doc.episciences.org](https://doc.episciences.org/)

## Prerequisites

- [Docker](https://docs.docker.com/engine/install/) (includes Docker Compose)
- Make (Linux/macOS only)

## Quick Start

```bash
# Clone the repository
git clone https://github.com/CCSDForge/episciences-doc.git
cd episciences-doc

# Build the Docker image
make build

# Start the development server
make serve
# Open http://localhost:8000
```

## Available Commands

```bash
make help       # Show available commands
make build      # Build the Docker image
make serve      # Start dev server (localhost:8000)
make build-site # Generate static site in ./site/
make clean      # Remove generated site/ folder
make version    # Show MkDocs version
```

## Windows Users

On Windows, use Docker Compose directly (included with Docker Desktop):

```bash
# Build the Docker image
docker compose build

# Start the development server
docker compose up
# Open http://localhost:8000

# Generate static site
docker compose run --rm docs mkdocs build
```

| Makefile | Docker Compose |
|----------|----------------|
| `make build` | `docker compose build` |
| `make serve` | `docker compose up` |
| `make build-site` | `docker compose run --rm docs mkdocs build` |

## Project Structure

```
docs/
├── en/          # English documentation
├── fr/          # French documentation
├── assets/      # Custom CSS
└── overrides/   # Theme customizations
```

## Contributing

1. Create a branch from `main`
2. Edit Markdown files in `docs/en/` and `docs/fr/`
3. Test locally with `make serve`
4. Submit a Pull Request

---

*Centre pour la Communication Scientifique Directe (CCSD)*
