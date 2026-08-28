# Signature Crafts builders Website

A modern React + Vite website for Rajula Interior Design, built to showcase the brand, interior design services, recent projects, and company profile in a clean, premium, and mobile-friendly experience.

This project is designed to be easy to understand, maintain, and extend by both developers and non-technical stakeholders. It uses a component-based architecture with structured content data, route-based service pages, and Firebase Hosting for deployment.

---

## Project Overview

This website serves as a digital brochure and portfolio for the business. It includes:

- A premium landing page with hero section and brand positioning
- Service overview cards and detailed service pages
- A gallery-style showcase of completed work
- About us / company narrative section
- Contact and call-to-action areas
- Responsive design for desktop, tablet, and mobile devices

The website is mostly a static marketing site, with content structured in a way that is easy to update without digging deeply into UI logic.

---

## Tech Stack

- React 19
- Vite
- JavaScript
- React Router DOM
- Tailwind CSS
- Firebase Hosting
- Lucide React icons

### Why this stack?

- React makes the interface modular and maintainable.
- Vite provides a fast development environment and efficient builds.
- Tailwind helps with consistent styling and responsive layouts.
- React Router enables dedicated pages for each service.
- Firebase Hosting gives a simple deployment path for production.

---

## Project Structure

```bash
my-react-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── about_us.jsx
│   │   ├── contact_section.jsx
│   │   ├── footer_section.jsx
│   │   ├── gallery.jsx
│   │   ├── hero_section.jsx
│   │   ├── nav_bar.jsx
│   │   ├── recent_projects.jsx
│   │   ├── service_detail_page.jsx
│   │   ├── services_section.jsx
│   │   └── ...
│   ├── data/
│   │   └── services.js
│   ├── images/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── firebase.json
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
└── ...
```

### Main folders and files

#### src/components

This contains the UI blocks of the website, including:

- `nav_bar.jsx` — top navigation
- `hero_section.jsx` — landing page banner
- `services_section.jsx` — overview of services
- `service_detail_page.jsx` — detailed service page for each category
- `recent_projects.jsx` — portfolio showcase
- `about_us.jsx` — company introduction
- `footer_section.jsx` — site footer

#### src/data/services.js

This file is the heart of the service content. It defines the service catalog, descriptions, highlights, and sample projects. Most of the content is centralized here, which makes editing easy and reduces duplication.

#### src/App.jsx

This file defines the application routes and overall page structure. It routes the home page and the dynamic service detail pages.

#### src/main.jsx

This is the app entry point where the app is mounted and wrapped in `BrowserRouter`.

---

## How the Site Works

### 1. Homepage

The home page is built from multiple reusable sections:

- navigation bar
- hero banner
- services section
- project showcase
- about section
- footer

### 2. Service pages

Each service is represented by a slug such as:

- kitchen-cabinets
- wardrobe-installation
- gypsum-ceiling
- tv-stands-installation
- tiling
- wainscoting

When a user clicks a service, the app loads the matching data from `src/data/services.js` and renders a detailed service page.

### 3. Content structure

The design is intentionally data-driven. Instead of hardcoding large amounts of content inside page components, the site keeps content in a central data file. This makes future updates cleaner and easier for a client or developer to maintain.

---

## Local Development

### Prerequisites

Make sure you have the following installed:

- Node.js (recommended LTS version)
- npm

### Install dependencies

```bash
npm install
```

### Start the local development server

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

### Preview production build locally

```bash
npm run preview
```

---

## Deployment

This project is configured for Firebase Hosting using the file `firebase.json`.

### Firebase hosting configuration

The app is set to deploy to the Firebase site:

```bash
rajula-interior-design
```

### Deploy command

If Firebase is configured on your machine:

```bash
firebase deploy
```

This publishes the generated `dist` folder to the hosting target.

---

## Styling and Design Notes

The website uses Tailwind CSS for layout and styling. Most of the design system is built using utility classes and reusable component styling patterns.

If you want to adjust spacing, typography, colors, or layout behavior:

- update the relevant component file
- or adjust shared styling in `src/index.css` or `App.css`

---

## Recommended Workflow for Contributions

### Branching strategy

Use a clear and consistent branch naming pattern:

```bash
feature/add-new-service
feature/update-gallery
fix/navigation-mobile-issue
chore/cleanup-project-structure
```

### Pull request workflow

1. Create a new branch from `main`
2. Make your changes
3. Run the project locally and test the affected pages
4. Build the app to ensure no errors:

```bash
npm run build
```

5. Commit your changes with clear commit messages:

```bash
git add .
git commit -m "Add gallery section improvements"
```

6. Push your branch:

```bash
git push origin <your-branch-name>
```

7. Open a Pull Request (PR) in GitHub against `main`
8. Add a short description of:
   - what changed
   - why it changed
   - whether any design or content updates were made
   - screenshots if relevant

### Good PR example

```md
## Summary

Updated the homepage hero section and refined the service layout styling.

## Changes

- improved spacing and typography
- updated service card layout
- added new content for kitchen and wardrobe offerings

## Verification

- Ran: npm run build
- Tested locally in browser
```

---

## Contribution Guidelines

When contributing to this project:

- keep components simple and reusable
- avoid hardcoding large blocks of text inside unrelated files
- prefer updating centralized content files when editing service information
- test the app locally before opening a PR
- keep commit messages clear and informative
- do not leave broken imports, unused files, or styling issues unresolved

---

## Common Editing Tasks

### Update service content

Edit:

```bash
src/data/services.js
```

This is the best place to change:

- service names
- service descriptions
- feature lists
- project details
- sample work information

### Update layout or section design

Edit the relevant component file under:

```bash
src/components/
```

### Update navigation or routes

Edit:

```bash
src/App.jsx
```

---

## Notes for the Client / Stakeholders

This project is intentionally structured so that non-technical stakeholders can understand where content lives and how the site is organized.

If you want to update the website in the future, the most common tasks are:

- change company text and service descriptions
- add new project samples
- modify branding and layout sections
- update contact information
- expand the portfolio gallery

Most of these edits can be done without rewriting the whole app.

---

## Useful Commands

```bash
npm install
npm run dev
npm run build
npm run preview
firebase deploy
```

---

## Final Notes

This project is a clean and scalable front-end foundation for Signature Crafts Builders. It is structured to be easy to maintain, simple to update, and suitable for ongoing portfolio growth.

If you are working with a team, this README can also serve as a quick onboarding guide for anyone joining the project later.

---

## Maintainer / Project Contact

- Name: Kelvin Mutugi
- Email: mutugikelvin316@gmail.com
- Website: www.budgetcodesolutions.top
- contact: 0799270500
