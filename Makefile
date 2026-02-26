.DEFAULT_GOAL := help

DOCS_BUILD_IMAGE ?= documentation-episciences-mkdocs
DOCKER_RUN_DOC_OPTS := --rm -v .:/docs -p 8000:8000

# Auto-detect docker compose command (V2 "docker compose" or V1 "docker-compose")
DOCKER_COMPOSE := $(shell docker compose version > /dev/null 2>&1 && echo "docker compose" || echo "docker-compose")

# Colors for display
CYAN  := \033[36m
GREEN := \033[32m
RESET := \033[0m

.PHONY: help build serve build-site clean version up down stop restart logs format format-check

help: ## Show this help
	@echo ""
	@echo "$(GREEN)Episciences Documentation$(RESET)"
	@echo "=========================="
	@echo ""
	@echo "$(CYAN)Available commands:$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}'
	@echo ""

build: ## Build the Docker image
	@docker build -t $(DOCS_BUILD_IMAGE) ./

serve: ## Start the dev server (http://localhost:8000)
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE)

build-site: ## Generate static site in ./site/
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs build

clean: ## Remove generated site/ folder
	@rm -rf site/

version: ## Show MkDocs version
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs --version

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

# Prettier commands (runs inside Docker)
format: ## Format all files with Prettier
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) prettier --write .

format-check: ## Check formatting without modifying files
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) prettier --check .
