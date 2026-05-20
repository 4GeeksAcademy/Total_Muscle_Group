# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

**Frontend:** React 18 + Vite 4, React Router v6, CSS (no framework), Context API + useReducer
**Backend:** Flask, SQLAlchemy ORM, Flask-Migrate (Alembic), Flask-Admin, flask-jwt-extended
**DB:** PostgreSQL (prod) / SQLite (dev) via DATABASE_URL
**Package manager:** pnpm (frontend), Pipenv (backend)

## Commands

```bash
# Frontend
pnpm dev          # Vite dev server on :3000
pnpm build        # Build to /dist
pnpm lint         # ESLint

# Backend (activate venv first: pipenv shell)
flask run         # API server on :3001 (dev) / :5000 (prod)
flask db migrate  # Generate migration after model changes
flask db upgrade  # Apply migrations

# Full stack (from project root)
pnpm dev & flask run    # Run both concurrently
```

## Architecture

```
src/
├── front/                   # React SPA
│   ├── main.jsx             # Entry — mounts RouterProvider
│   ├── routes.jsx           # All route definitions
│   ├── store.js             # Initial state shape
│   ├── hooks/useGlobalReducer.jsx  # Global state hook (Context + useReducer)
│   ├── pages/Layout.jsx     # Root layout with Navbar/Footer + <Outlet />
│   └── pages/               # One file per route
└── api/
    ├── models.py            # SQLAlchemy models
    ├── routes.py            # Flask blueprints + endpoints
    ├── admin.py             # Flask-Admin views
    └── commands.py          # Custom flask CLI commands
```

## State Management

Global state uses a single Context + useReducer pattern. To access state in any component:

```jsx
import useGlobalReducer from "../hooks/useGlobalReducer";
const { store, dispatch } = useGlobalReducer();
```

New global state must be added to `store.js` (initial values) and handled in the reducer inside `useGlobalReducer.jsx`.

## Backend Patterns

- All Flask routes live in `src/api/routes.py` under the `/api` blueprint
- Models use SQLAlchemy declarative base with typed annotations
- After modifying models: `flask db migrate -m "description"` then `flask db upgrade`
- `utils.py` has `APIException` — use it to return structured error responses

## Environment

Copy `.env.example` to `.env` and set:
- `DATABASE_URL` — SQLAlchemy connection string
- `FLASK_APP_KEY` — secret key for JWT/sessions
- `FLASK_DEBUG=True` — enables auto-reload and sitemap endpoint

## Domain Model

Three fitness disciplines: **Boxing, Crossfit, Calistenia**. Core entities: Users, Classes (with type/level), Reservations. User roles: regular user and admin. Most backend logic beyond the User model is still pending implementation.
