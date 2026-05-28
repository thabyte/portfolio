---
title: 'Café Fausse — full-stack restaurant platform'
tagline: 'A from-scratch full-stack build: marketing site, reservations with availability logic, and an admin dashboard.'
summary: 'A React + Flask web app for a fine-dining restaurant — self-service reservations with availability and table-assignment logic, newsletter, and a JWT-protected admin, deployed end-to-end.'
order: 6
featured: true
isPublic: true
tags: ['React', 'Flask', 'PostgreSQL', 'Full-stack']
stack: 'React 18 · Flask 3 · SQLAlchemy · PostgreSQL · JWT · Vercel · Railway'
liveUrl: 'https://fausse-cafe.vercel.app/'
---

## Context

A from-scratch full-stack build to show the whole loop: schema design, a real
REST API, a polished React frontend, and live deployment on managed
infrastructure.

## What I built

A React 18 frontend and a Flask + SQLAlchemy backend over PostgreSQL, with an
11-endpoint REST API covering reservations (availability checks, duplicate
prevention, table assignment), newsletter signup, and JWT-protected admin.

## Highlights

- Availability-aware reservation engine with table-assignment logic
- JWT-authenticated admin dashboard for reservations and subscribers
- Clean schema with seed data and audit fields
- Deployed: frontend on Vercel, backend on Railway
