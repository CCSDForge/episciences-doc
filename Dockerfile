#FROM python:3.11-alpine3.18
FROM python:3.12-alpine
#FROM squidfunk/mkdocs-material

WORKDIR /docs

RUN apk update
RUN apk add openssh
RUN apk add git
RUN pip install --upgrade pip
RUN pip install mkdocs  \
    mkdocs-static-i18n  \
    mkdocs-git-revision-date-localized-plugin  \
    mkdocs-minify-plugin \
    mkdocs-material \
    mkdocs-print-site-plugin
#   mkdocs-encriptmail-plugin BeautifulSoup4

EXPOSE 8000
