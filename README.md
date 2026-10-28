# 📖 Read Bible 大家一起讀聖經

[![ci](https://github.com/jennifershih/read-bible/actions/workflows/ci.yml/badge.svg)](https://github.com/jennifershih/read-bible/actions/workflows/ci.yml)
[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Live demo](https://img.shields.io/badge/demo-GitHub%20Pages-2ea44f)](https://jennifershih.github.io/read-bible/)

A small web app for reading the Bible in Chinese (Chinese Union Version, 和合本) and getting a verse picked for how you feel today.

**[Try it →](https://jennifershih.github.io/read-bible/)**

## Features

- **Read by book and chapter** — pick any of the 66 books and a chapter; verses are shown with numbers, in the Chinese Union Version from [bible-api.com](https://bible-api.com).
- **Verse for your mood (AI 心情問答區)** — tap a mood or describe your day, and [read-bible-api](https://github.com/jennifershih/read-bible-api) asks OpenAI for a fitting verse.
- **Google sign-in** via `@abacritt/angularx-social-login`.

> The mood feature depends on the OpenAI key of the API project. When the key is not active, the app shows a friendly error instead of a verse.

## Built with

- Angular 22 — standalone components, signals, new control flow (`@if` / `@for`)
- Angular Material
- Vitest for unit tests, ESLint (angular-eslint) and Prettier
- GitHub Actions → GitHub Pages

## Getting started

Requires Node.js 22+.

```bash
git clone https://github.com/jennifershih/read-bible.git
cd read-bible
npm install
npm start          # http://localhost:4200
```

In development the app calls the API at `http://localhost:3000` (see `src/environments/environment.development.ts`); run [read-bible-api](https://github.com/jennifershih/read-bible-api) locally, or point it at `https://read-bible-api.vercel.app`.

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Dev server with live reload |
| `npm run build` | Production build into `dist/read-bible` |
| `npm test` | Unit tests (Vitest) in watch mode |
| `npm run test:ci` | Unit tests once, for CI |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## CI/CD

Every push and pull request runs lint and tests. Pushes to `main` that pass are built and published to the `gh-pages` branch, which serves the live site.

## Project structure

```
src/app
├── app.config.ts              # providers: HTTP, animations, Google sign-in
├── header/  footer/  tabs/    # layout
├── login/                     # Google sign-in button and user card
├── search-verse/              # book & chapter reader (+ bible-books.ts data)
└── generate-verse-from-mood/  # AI verse-for-your-mood
```
