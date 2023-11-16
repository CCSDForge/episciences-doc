DOCS_BUILD_IMAGE ?= documentation-episciences-mkdocs

DOCKER_RUN_DOC_OPTS := --rm -v .:/docs -p 8000:8000

.PHONY: build doc-serve doc-build version

build:
	docker build -t $(DOCS_BUILD_IMAGE) ./

version:
	docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs --version

doc-serve:
	docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs serve --dev-addr=0.0.0.0:8000

doc-build:
	docker run $(DOCKER_RUN_DOC_OPTS) $(DOCS_BUILD_IMAGE) mkdocs build
