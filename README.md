# Portfolio Website

A personal portfolio website for Grace Amarachi, a Frontend Engineer. Built with React, Vite, and Tailwind CSS.

## Features

- **Hero / About** — profile picture and intro
- **Services** — frontend engineering capabilities
- **Featured Applications** — showcase of recent projects
- **Contact** — get in touch section with a message form
- **Responsive** — mobile-first layout with Tailwind CSS

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 3
- Lucide React (icons)

## Project Structure

```
portfolio/
├── index.html
├── src/
│   ├── App.jsx              # Main layout
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   ├── assets/              # Images
│   └── components/
│       ├── Navbar.jsx       # Sticky navigation
│       ├── Hero.jsx         # Landing / about section
│       ├── Services.jsx     # Capabilities grid
│       ├── Projects.jsx     # Featured applications
│       ├── Contact.jsx      # Contact form
│       ├── FloatingSocials.jsx # Social links sidebar
│       └── Footer.jsx
└── dist/                    # Production build output
```

## Featured Projects

- **Countries Information Hub** — explore country data including population, capital, region, languages, and more
- **Girlie App** — beauty and hair-braiding services mobile web app
- **Meeting App** — meeting scheduling and attendee coordination app
- **MEDTRUST AFRICA** — logistics management web application deployed on Firebase

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to view it in the browser.

## Build

```bash
npm run build
```

The production build is output to the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```