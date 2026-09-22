# AlizaDev Portfolio

Premium portfolio for Aliza Zahid with a feature-based React frontend and a content dashboard for images, projects, services, technologies, and contact data.

## Architecture

```
Browser → main.jsx → App.jsx → AppRoutes
  ├── MainLayout → Home sections (#home #about #services #technology #projects #contact)
  ├── /projects and /projects/:slug
  └── /admin dashboard → Express API → JSON store + uploads
```

Public pages read from `GET /api/content`. The dashboard writes the same store, so uploads and edits appear on the live site without editing code.

## Scripts

```bash
npm install
npm run dev
```

- Site: http://localhost:5173
- Dashboard: http://localhost:5173/admin/login
- API: http://localhost:5000/api/health

## Admin login

Defaults from `.env`:

- Email: `alizadeveloper2@gmail.com`
- Password: `AlizaDev@2026`

Change these before any public deploy. Never put private API keys in `VITE_*` variables.

## Dashboard

From `/admin` you can:

- Upload a profile photo
- Create / edit / delete projects
- Upload thumbnails, hero images, and screenshots
- Edit services and technology logos
- Update phone, emails, location, and social links
- Manage the media library

Uploaded files are stored in `server/uploads` and served from `/uploads/...`.

## Stack

React 19, Vite, Tailwind CSS, React Router, Framer Motion, TanStack Query, Axios, Express, Multer, JWT.
