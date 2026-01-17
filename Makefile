.DEFAULT_GOAL := help

DOCS_BUILD_IMAGE ?= documentation-episciences-mkdocs
DOCKER_RUN_DOC_OPTS := --rm -v .:/docs -p 8000:8000

# Colors for display
CYAN  := \033[36m
GREEN := \033[32m
RESET := \033[0m

.PHONY: help build serve build-site clean version up down stop restart logs

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

# Docker Compose commands (cross-platform)
up: ## Start container in background (docker-compose)
	@docker-compose up -d

down: ## Stop and remove container (docker-compose)
	@docker-compose down

stop: ## Stop container without removing (docker-compose)
	@docker-compose stop

restart: ## Restart container (docker-compose)
	@docker-compose restart

logs: ## Show container logs (docker-compose)
	@docker-compose logs -f
