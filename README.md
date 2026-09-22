# AlizaDev Portfolio

Premium static portfolio for Aliza Zahid. Built with React and Vite. Content lives in `src/data/site.json` so the public site runs without a backend.

The admin dashboard and Express API are in the repo for a later integration. They are not wired into the live site yet.

## Architecture

```
Browser → main.jsx → App.jsx → AppRoutes
  ├── MainLayout → Home (#home #about #services #experience #technology #projects #contact)
  ├── /projects
  └── /projects/:slug
```

## Scripts

```bash
npm install
npm run dev
```

Site: http://localhost:5173  
Live: https://aliza-zahid.vercel.app/

```bash
npm run build
npm run preview
```

## Content

Edit `src/data/site.json` to update profile, experience, education, projects, services, technologies, testimonials, FAQs, and contact details.

Images live in `public/images/`.

## Later: admin dashboard

`server/` and `src/pages/admin/` stay in the repo. When you are ready to connect the dashboard:

```bash
npm run server
npm run dev:full
```

Dashboard login and API details will be documented again when that work starts.

## Stack

React 19, Vite, Tailwind CSS, React Router, Framer Motion.
