# Suadik Portfolio

Personal portfolio website for Suadik Husseini, built with a React + Vite frontend and an Express backend.

## Overview

This project presents:

- a responsive portfolio landing page
- project highlights and professional profile sections
- a portfolio chatbot with profile-based responses
- a contact-ready backend service

## Tech Stack

Frontend:

- React
- Vite
- CSS

Backend:

- Node.js
- Express
- Nodemailer

## Project Structure

```text
suadik-portfolio/
├─ src/              # frontend source
├─ server/           # Express backend
├─ public/           # static assets
├─ package.json      # frontend scripts
└─ README.md
```

## Local Development

Install frontend dependencies from the project root:

```bash
npm install
```

Install backend dependencies from the `server` folder:

```bash
cd server
npm install
```

Run the frontend from the project root:

```bash
npm run dev
```

Run the backend from the project root in a second terminal:

```bash
npm run server
```

Alternative backend command from inside `server/`:

```bash
cd server
npm start
```

## Production Build

Create the frontend production build:

```bash
npm run build
```

Preview the production frontend locally:

```bash
npm run preview
```

## Deployment

### Frontend

You can deploy the frontend to:

- Vercel
- Netlify
- GitHub Pages

Build command:

```bash
npm run build
```

Publish directory:

```bash
dist
```

### Backend

You can deploy the backend separately to:

- Render
- Railway
- Fly.io

Backend start command:

```bash
cd server && npm start
```

If you deploy with a platform dashboard, make sure the backend service points to the `server` directory and has its required environment variables configured.

## Contact Information Used In The Portfolio

- Name: Suadik Husseini
- Location: Ghana
- Phone: +233 257 936 341
- Email: suadikhussein2323@email.com
- GitHub: https://github.com/suadik-error
- Portfolio: https://suadikportfolio.com

## Featured Project

Live demo:

- E-commerce project: https://e-commerce-1-5umj.onrender.com

## Notes

- The frontend and backend are separate runtime processes.
- The current chatbot uses portfolio profile data from the frontend.
- The backend contact route is in `server/server.js`.

## GitHub Push

This workspace currently does not contain a `.git` directory, so it is not an active Git repository in this environment.

Once the project is connected to GitHub, the usual commands are:

```bash
git init
git add .
git commit -m "Add portfolio UI updates and deployment-ready README"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
