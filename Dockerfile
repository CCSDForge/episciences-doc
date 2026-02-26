FROM python:3.14-alpine

LABEL maintainer="CCSD <contact@episciences.org>"
LABEL description="MkDocs build environment for Episciences documentation"

WORKDIR /docs

# Installation en une seule couche + nettoyage des caches
RUN apk update && apk add --no-cache openssh git nodejs npm \
    && npm install -g prettier@3.5.0 \
    && pip install --no-cache-dir \
        mkdocs \
        mkdocs-material \
        mkdocs-static-i18n \
        mkdocs-git-revision-date-localized-plugin \
        mkdocs-minify-plugin \
        mkdocs-print-site-plugin \
        mkdocs-video \
        mkdocs-encriptmail-plugin \
        beautifulsoup4 \
    && rm -rf /var/cache/apk/*

EXPOSE 8000

CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]
