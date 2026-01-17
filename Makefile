.DEFAULT_GOAL := help

DOCS_BUILD_IMAGE ?= documentation-episciences-mkdocs
DOCKER_RUN_DOC_OPTS := --rm -v .:/docs -p 8000:8000

# Couleurs pour l'affichage
CYAN  := \033[36m
GREEN := \033[32m
RESET := \033[0m

.PHONY: help build serve build-site clean version

help: ## Affiche cette aide
	@echo ""
	@echo "$(GREEN)Episciences Documentation$(RESET)"
	@echo "=========================="
	@echo ""
	@echo "$(CYAN)Commandes disponibles :$(RESET)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-15s$(RESET) %s\n", $$1, $$2}'
	@echo ""

build: ## Construit l'image Docker
	@docker build -t $(DOCS_BUILD_IMAGE) ./

serve: ## Lance le serveur de développement (http://localhost:8000)
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE)

build-site: ## Génère le site statique dans ./site/
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs build

clean: ## Supprime le dossier site/ généré
	@rm -rf site/

version: ## Affiche la version de MkDocs
	@docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs --version
