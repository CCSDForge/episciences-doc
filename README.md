# Episciences Documentation

[![Deploy](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml/badge.svg)](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![MkDocs Material](https://img.shields.io/badge/docs-MkDocs%20Material-blue?logo=materialformkdocs)](https://squidfunk.github.io/mkdocs-material/)
[![Python](https://img.shields.io/badge/python-3.x-blue?logo=python&logoColor=white)](https://www.python.org/)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier)](https://prettier.io/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen?logo=renovatebot)](https://github.com/apps/renovate)

Official documentation for the [Episciences](https://www.episciences.org/) platform, built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).

**Live documentation:** [doc.episciences.org](https://doc.episciences.org/)

## Prerequisites

- [Git](https://git-scm.com/downloads): Version control system
- [Docker](https://docs.docker.com/engine/install/) (includes Docker Compose)
- Make (Linux/macOS only)
- PowerShell (optional, Windows only)

## Quick Start (Linux/macOS)

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

## Quick Start (Windows)

On Windows, use Docker Compose directly (included with Docker Desktop):

```bash
# Clone the repository
git clone https://github.com/CCSDForge/episciences-doc.git
cd episciences-doc

# Build the Docker image
docker compose build

# Start the development server
docker compose up
# Open http://localhost:8000
```

Alternatively, you can use the `docker run` command equivalent to `make serve`:

**PowerShell**
```powershell
docker run --rm -v ${PWD}:/docs -p 8000:8000 documentation-episciences-mkdocs
```

**Command Prompt (CMD)**
```cmd
docker run --rm -v %cd%:/docs -p 8000:8000 documentation-episciences-mkdocs
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

| Makefile          | Docker Compose                              |
| ----------------- | ------------------------------------------- |
| `make build`      | `docker compose build`                      |
| `make serve`      | `docker compose up`                         |
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

_Centre pour la Communication Scientifique Directe (CCSD)_
