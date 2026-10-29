.DEFAULT_GOAL := help

DOCS_BUILD_IMAGE ?= documentation-episciences-starlight
DOCKER_RUN_DOC_OPTS := --rm -v .:/app -p 4321:4321

# Auto-detect docker compose command (V2 "docker compose" or V1 "docker-compose")
DOCKER_COMPOSE := $(shell docker compose version > /dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

# Colors for display
CYAN  := \033[36m
GREEN := \033[32m
RESET := \033[0m

.PHONY: help build serve build-site clean version dev check build-local up down stop restart logs format format-check

help: ## Show this help
	@echo ""
	@echo "$(GREEN)Episciences Documentation (Starlight)$(RESET)"
	@echo "======================================="
	@echo ""
	@echo "$(CYAN)Available commands:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}'
	@echo ""

dev: ## Start dev server locally (npm run dev)
	@npm run dev

check: ## Run astro check locally
	@npx astro check

build-local: ## Build static site locally (dist/)
	@npm run build

build: ## Build the Docker image
	@docker build -t $(DOCS_BUILD_IMAGE) ./

serve: ## Start the dev server in Docker (http://localhost:4321)
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE)

build-site: ## Generate static site in ./dist/ via Docker
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) npm run build

clean: ## Remove generated dist/ and .astro/ folders
	@rm -rf dist/ .astro/

version: ## Show Starlight and Astro version
	@npm list @astrojs/starlight astro

# Docker Compose commands (cross-platform, supports both V1 and V2)
up: ## Start container in background
	@$(DOCKER_COMPOSE) up -d

down: ## Stop and remove container
	@$(DOCKER_COMPOSE) down

stop: ## Stop container without removing
	@$(DOCKER_COMPOSE) stop

restart: ## Restart container
	@$(DOCKER_COMPOSE) restart

logs: ## Show container logs
	@$(DOCKER_COMPOSE) logs -f

# Prettier commands
format: ## Format all files with Prettier
	@npm run format

format-check: ## Check formatting without modifying files
	@npm run format:check
