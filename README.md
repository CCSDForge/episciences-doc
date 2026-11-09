# Episciences Documentation

[![Deploy](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml/badge.svg)](https://github.com/CCSDForge/episciences-doc/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Starlight](https://img.shields.io/badge/docs-Starlight-blue?logo=astro)](https://starlight.astro.build/)
[![Astro](https://img.shields.io/badge/astro-v7-BC52EE?logo=astro)](https://astro.build/)
[![Docker](https://img.shields.io/badge/docker-ready-blue?logo=docker&logoColor=white)](https://www.docker.com/)
[![Prettier](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier)](https://prettier.io/)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen?logo=renovatebot)](https://github.com/apps/renovate)

Dépôt officiel de la documentation de la plateforme [Episciences](https://www.episciences.org/), propulsé par [Astro Starlight](https://starlight.astro.build/).

🌐 **Site de documentation en ligne :** [doc.episciences.org](https://doc.episciences.org/)

---

## 📖 Guide complet (Rédaction, Prise en main & Contribution)

Toute la documentation détaillée, conçue pour être **facilement accessible aux personnes non-développeuses** (secrétariats de rédaction, équipes éditoriales, contributeurs), se trouve dans le guide dédié :

👉 **[Consulter le Guide d'utilisation et de contribution (docs/GUIDE.md)](docs/GUIDE.md)**

Vous y trouverez :

- **Où chercher les informations** et comment s'y retrouver dans les fichiers.
- **Comment modifier une page existante** (textes, images, encadrés d'alerte).
- **Comment ajouter une nouvelle page** en français et en anglais.
- **Comment réordonner les pages du menu** et renommer les rubriques.
- **Comment prévisualiser immédiatement vos modifications** en direct sur votre ordinateur.

---

## 🚀 Démarrage rapide (Prévisualisation locale)

### Avec Docker (Recommandé - Windows, macOS, Linux)

Aucune installation de Node.js n'est requise si vous disposez de [Docker Desktop](https://www.docker.com/products/docker-desktop/) :

```bash
docker compose up
```

Ouvrez **[http://localhost:4321](http://localhost:4321)** dans votre navigateur. Les modifications apportées aux fichiers s'affichent automatiquement en temps réel.

Pour arrêter le serveur : `Ctrl + C` ou `docker compose down`.

### Sans Docker (Avec Node.js v20+)

```bash
npm install
npm run dev
```

Rendez-vous sur **[http://localhost:4321](http://localhost:4321)**.

---

## 🛠️ Aide-mémoire des commandes

| Action                            | Avec Docker                                    | Sans Docker       |
| :-------------------------------- | :--------------------------------------------- | :---------------- |
| **Serveur de développement**      | `docker compose up`                            | `npm run dev`     |
| **Générer le site (build)**       | `docker compose run --rm docs npm run build`   | `npm run build`   |
| **Vérifier les liens et erreurs** | `docker compose run --rm docs npx astro check` | `npx astro check` |
| **Formater les fichiers**         | `docker compose run --rm docs npm run format`  | `npm run format`  |

Pour tous les détails avancés et l'architecture complète, consultez **[docs/GUIDE.md](docs/GUIDE.md)**.
