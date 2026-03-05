# Brandon Cabrera — Portfolio

Personal portfolio built with Vue 3, Vite, and Tailwind CSS. Showcases my work as a Full Stack Developer with smooth animations and a modern UI.

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **Vite 7** — Fast dev server and build tool
- **Tailwind CSS 4** — Utility-first styling
- **Vue Router 4** — Client-side routing
- **Motion** — Animations and transitions

## Views

| Route     | Description                                     |
| --------- | ----------------------------------------------- |
| `/`       | Home — hero section with animated role carousel |
| `/about`  | About me                                        |
| `/skills` | Tech skills                                     |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── layout/
│       ├── NavBar.vue
│       └── Footer.vue
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── SkillsView.vue
├── router/
│   └── index.ts
├── App.vue
├── main.js
└── style.css
```
