# Guide d'utilisation et de contribution - Documentation Episciences

Bienvenue dans documentation de la documentation de la plateforme [Episciences](https://www.episciences.org/), consultable en ligne à l'adresse **[doc.episciences.org](https://doc.episciences.org/)**.

---

## Sommaire

1. [Prise en main rapide (Prévisualiser le site)](#1-prise-en-main-rapide-prévisualiser-le-site)
2. [Où trouver quoi ? (Repères dans les fichiers)](#2-où-trouver-quoi--repères-dans-les-fichiers)
3. [Comment modifier une page existante](#3-comment-modifier-une-page-existante)
4. [Comment ajouter une nouvelle page](#4-comment-ajouter-une-nouvelle-page)
5. [Comment configurer et réordonner les menus](#5-comment-configurer-et-réordonner-les-menus)
   - [Changer l'ordre des pages dans le menu de gauche](#a-changer-lordre-des-pages-dans-le-menu-de-gauche)
   - [Renommer une rubrique du menu](#b-renommer-une-rubrique-du-menu)
   - [Créer une nouvelle rubrique](#c-créer-une-nouvelle-rubrique)
   - [Personnaliser le sommaire de droite ("Sur cette page")](#d-personnaliser-le-sommaire-de-droite-sur-cette-page)
6. [Mettre en forme le contenu (Markdown & Encadrés)](#6-mettre-en-forme-le-contenu-markdown--encadrés)
7. [Vérifier ses modifications avant de publier](#7-vérifier-ses-modifications-avant-de-publier)
8. [Publication et mise en ligne](#8-publication-et-mise-en-ligne)
9. [Annexe technique (Pour les développeurs et administrateurs)](#9-annexe-technique-pour-les-développeurs-et-administrateurs)

---

## 1. Prise en main rapide (Prévisualiser le site)

Pour voir directement le résultat de vos modifications au fur et à mesure que vous écrivez, vous pouvez lancer le site en local sur votre ordinateur. Chaque modification enregistrée actualisera immédiatement la page dans votre navigateur ("rechargement à chaud").

### Option A : Avec Docker (Recommandée - Fonctionne sur Windows, Mac et Linux)

Si vous avez installé [Docker Desktop](https://www.docker.com/products/docker-desktop/), vous n'avez besoin d'installer aucun outil de développement supplémentaire.

1. Ouvrez un terminal dans le dossier du projet (`epi-doc`).
2. Démarrez le serveur avec la commande :
   ```bash
   docker compose up
   ```
3. Ouvrez votre navigateur web à l'adresse suivante : **[http://localhost:4321](http://localhost:4321)**.
4. **Pour arrêter le serveur :** appuyez sur `Ctrl + C` dans le terminal ou tapez `docker compose down`.

---

### Option B : Avec Node.js (Sans Docker)

Si vous disposez de [Node.js](https://nodejs.org/) (version 20 ou 22+) :

1. Installez les dépendances (à faire une seule fois au début) :
   ```bash
   npm install
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
3. Rendez-vous sur **[http://localhost:4321](http://localhost:4321)**.
4. **Pour arrêter le serveur :** appuyez sur `Ctrl + C` dans le terminal.

---

## 2. Où trouver quoi ? (Repères dans les fichiers)

Voici les seuls dossiers et fichiers dont vous aurez besoin pour contribuer à la documentation :

```text
epi-doc/
│
├── astro.config.mjs             <-- Le plan des menus (menu latéral de gauche)
│
├── docs/
│   └── GUIDE.md                 <-- Ce guide d'utilisation
│
└── src/
    ├── assets/                  <-- Logos et images globales
    │
    └── content/
        └── docs/                <-- TOUS LES ARTICLES DE DOCUMENTATION SONT ICI
            ├── fr/              <-- Versions françaises des articles (.md)
            │   └── img/         <-- Captures d'écran et illustrations
            └── en/              <-- Versions anglaises des articles (.md)
                └── img/
```

> **Règle d'or du bilinguisme** : Chaque article existe en double : une version française dans `src/content/docs/fr/` et une version anglaise dans `src/content/docs/en/`, avec exactement le même nom de fichier (par exemple `submission.md`).

---

## 3. Comment modifier une page existante

1. Rendez-vous dans le dossier de la langue souhaitée :
   - Français : `src/content/docs/fr/`
   - Anglais : `src/content/docs/en/`
2. Ouvrez le fichier correspondant (par exemple `submission.md`) avec votre éditeur habituel (VS Code, bloc-notes, etc.).
3. Chaque fichier commence par un en-tête délimité par trois tirets (`---`). **Ne supprimez pas ces tirets** :
   ```yaml
   ---
   title: Soumettre un article
   description: Guide de soumission sur la plateforme Episciences
   ---
   ```
4. Modifiez le texte sous l'en-tête selon vos besoins.
5. Enregistrez le fichier : votre navigateur sur `http://localhost:4321` se met à jour automatiquement !

---

## 4. Comment ajouter une nouvelle page

Pour créer une nouvelle page, suivez ces 3 étapes simples :

### Étape 1 : Créer les deux fichiers de contenu (FR et EN)

Choisissez un nom court et sans accents en minuscules, séparé par des tirets (ce qu'on appelle un _slug_).  
_Exemple : `mon-nouveau-guide.md`._

Créez ensuite les deux fichiers :

1. `src/content/docs/fr/mon-nouveau-guide.md`
2. `src/content/docs/en/mon-nouveau-guide.md`

### Étape 2 : Remplir l'en-tête et rédiger le contenu

Dans le fichier français `src/content/docs/fr/mon-nouveau-guide.md` :

```markdown
---
title: Mon nouveau guide
description: Présentation de cette nouvelle fonctionnalité
---

## Bienvenue sur ce guide

Voici le contenu de votre documentation...
```

Dans le fichier anglais `src/content/docs/en/mon-nouveau-guide.md` :

```markdown
---
title: My New Guide
description: Overview of this new feature
---

## Welcome to this guide

Here is the content of your documentation...
```

### Étape 3 : Faire apparaître la page dans le menu

Pour que les lecteurs puissent accéder à votre page depuis le menu latéral de gauche, il faut l'inscrire dans le fichier `astro.config.mjs` (voir la section suivante).

---

## 5. Comment configurer et réordonner les menus

Le menu de navigation de gauche est configuré dans le fichier **`astro.config.mjs`**, situé à la racine du projet.

Ouvrez `astro.config.mjs` et repérez la section `sidebar: [ ... ]`.

### A. Changer l'ordre des pages dans le menu de gauche

Dans `astro.config.mjs`, l'ordre d'affichage dans chaque section correspond simplement à **l'ordre des lignes** dans le bloc `items`.

#### Exemple :

Imaginons la section "Auteurs & Soumission" :

```javascript
{
  label: "Authors & Submission",
  translations: { fr: "Auteurs & Soumission" },
  items: [
    { slug: "submission" },
    { slug: "account" },
    { slug: "authoreditorcommunication" },
  ],
},
```

- **Pour faire passer "Création de compte" (`account`) en premier :** il suffit de remonter la ligne :

```javascript
{
  label: "Authors & Submission",
  translations: { fr: "Auteurs & Soumission" },
  items: [
    { slug: "account" },                    // <-- Passé en 1ère position
    { slug: "submission" },
    { slug: "authoreditorcommunication" },
  ],
},
```

- **Pour ajouter votre nouvelle page créée à l'étape précédente (`mon-nouveau-guide`) :**

```javascript
{
  label: "Authors & Submission",
  translations: { fr: "Auteurs & Soumission" },
  items: [
    { slug: "account" },
    { slug: "submission" },
    { slug: "authoreditorcommunication" },
    { slug: "mon-nouveau-guide" },          // <-- Votre nouvelle page ici !
  ],
},
```

---

### B. Renommer une rubrique du menu

Chaque catégorie de menu possède un titre en anglais (`label`) et sa traduction en français (`translations.fr`) :

```javascript
{
  label: "Journal Editorial Management",                  // Titre affiché en version anglaise
  translations: { fr: "Gestion éditoriale de la revue" }, // Titre affiché en version française
  items: [
    // ...
  ]
}
```

Modifiez simplement le texte entre guillemets pour changer son intitulé.

---

### C. Créer une nouvelle rubrique

Pour créer une toute nouvelle catégorie dans le menu de gauche, ajoutez un nouveau bloc dans `sidebar: [ ... ]` :

```javascript
{
  label: "Statistics & Metrics",
  translations: { fr: "Statistiques & Métriques" },
  collapsed: false, // mettre à 'true' si vous voulez qu'elle soit repliée par défaut
  items: [
    { slug: "statistiques-consultation" },
  ],
},
```

---

### D. Personnaliser le sommaire de droite ("Sur cette page")

Le menu de droite est généré **automatiquement** à partir des titres de niveaux 2 (`##`) et 3 (`###`) présents dans votre page.

Vous pouvez ajuster son comportement directement en haut d'un article dans son en-tête YAML :

- **Masquer totalement le sommaire de droite pour cette page :**

  ```yaml
  ---
  title: Page d'accueil
  tableOfContents: false
  ---
  ```

- **Afficher aussi les sous-titres de niveau 4 (`####`) :**
  ```yaml
  ---
  title: Documentation détaillée
  tableOfContents:
    minHeadingLevel: 2
    maxHeadingLevel: 4
  ---
  ```

---

## 6. Mettre en forme le contenu (Markdown & Encadrés)

### Les bases de l'écriture en Markdown

| Pour obtenir...          | Tapez dans votre fichier :                                       |
| :----------------------- | :--------------------------------------------------------------- |
| Titre de section         | `## Titre de niveau 2`                                           |
| Sous-titre               | `### Sous-titre de niveau 3`                                     |
| Texte en gras            | `**texte en gras**`                                              |
| Texte en italique        | `*texte en italique*`                                            |
| Liste à puces            | `- Premier point`<br>`- Deuxième point`                          |
| Liste numérotée          | `1. Première étape`<br>`2. Deuxième étape`                       |
| Lien hypertexte          | `[Consulter Episciences](https://www.episciences.org/)`          |
| Lien vers une autre page | `[Consulter la FAQ](/fr/faq/)` ou `[Consulter la FAQ](/en/faq/)` |
| Image                    | `![Description](img/ma-capture.png)`                             |

### Encadrés visuels (Astuces, Remarques, Alertes)

Vous pouvez insérer des encadrés très lisibles pour guider le lecteur :

```markdown
:::note
Remarque : Information complémentaire ou contexte utile.
:::

:::tip
Astuce : Bonnes pratiques et conseils pratiques.
:::

:::caution
Attention : Point de vigilance important ou limitation à connaître.
:::

:::danger
Avertissement critique : Opération sensible (suppression de données, etc.).
:::
```

---

## 7. Vérifier ses modifications avant de publier

Avant de valider et partager vos modifications, deux vérifications simples sont recommandées :

### 1. Vérifier qu'aucun lien n'est brisé

Pour s'assurer que tous les liens internes et images fonctionnent correctement :

- **Avec Docker :**
  ```bash
  docker compose run --rm docs npx astro check
  ```
- **Sans Docker :**
  ```bash
  npx astro check
  ```

### 2. Harmoniser la mise en forme du texte automatiquement

Le projet utilise l'outil _Prettier_ qui aligne et formate proprement tous les fichiers Markdown :

- **Avec Docker :**
  ```bash
  docker compose run --rm docs npm run format
  ```
- **Sans Docker :**
  ```bash
  npm run format
  ```

---

## 8. Publication et mise en ligne

La publication de la documentation est **100 % automatisée** via GitHub Actions :

1. Lorsque vos modifications sont validées et fusionnées sur la branche principale (`main`), le système construit automatiquement la version de production.
2. Le site public **[doc.episciences.org](https://doc.episciences.org/)** est mis à jour en quelques minutes sans aucune intervention manuelle.

---

## 9. Annexe technique (Pour les développeurs et administrateurs)

<details>
<summary>Cliquez ici pour dérouler les détails d'architecture et de configuration avancée</summary>

### Pile technique

- **Framework** : [Astro](https://astro.build/) (v7) avec le thème officiel [Starlight](https://starlight.astro.build/).
- **Internationalisation (i18n)** : Deux langues gérées (`en` par défaut, `fr`).
- **Plugins actifs** :
  - `starlight-image-zoom` : Zoom au clic sur toutes les illustrations.
  - `starlight-scroll-to-top` : Bouton de retour haut de page.
  - `starlight-links-validator` : Validation automatique de tous les liens internes.
  - `starlight-llms-txt` : Génération des flux LLM optimisés pour agents d'intelligence artificielle.

### Commandes usuelles

| Action                          | Avec Docker                                         | Sans Docker (Local)    |
| :------------------------------ | :-------------------------------------------------- | :--------------------- |
| **Serveur de développement**    | `docker compose up`                                 | `npm run dev`          |
| **Génération statique (build)** | `docker compose run --rm docs npm run build`        | `npm run build`        |
| **Prévisualisation du build**   | _(via hôte local)_                                  | `npm run preview`      |
| **Validation types & liens**    | `docker compose run --rm docs npx astro check`      | `npx astro check`      |
| **Formatage Prettier**          | `docker compose run --rm docs npm run format`       | `npm run format`       |
| **Vérification du formatage**   | `docker compose run --rm docs npm run format:check` | `npm run format:check` |

### Documentation pour LLM et impression PDF

- **Exports LLM** : Générés automatiquement dans le build sous `/llms.txt`, `/_llms-txt/english-documentation.txt`, `/_llms-txt/documentation-en-français.txt`, et `/llms-small.txt`.
- **Export PDF / Impression** : Accessible via le raccourci d'impression standard du navigateur (`Ctrl+P` / `Cmd+P`). Les barres de navigation latérales, la recherche et les éléments d'interface sont automatiquement exclus à l'impression grâce aux règles CSS dédiées dans `src/styles/episciences.css`.

### Astuces Windows

- Docker sous Windows utilise le backend WSL 2. La variable `CHOKIDAR_USEPOLLING=true` est activée dans `docker-compose.yml` pour garantir la détection instantanée des modifications de fichiers.
- Pour éviter les écarts de fins de ligne (CRLF vs LF) : `git config core.autocrlf input`.

</details>
