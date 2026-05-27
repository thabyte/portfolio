---
title: 'Zed POS — offline-first point-of-sale platform'
tagline: 'A supermarket point-of-sale platform built to keep selling even when the network does not.'
summary: 'A Go server, a Rust + Tauri offline-first terminal, and PostgreSQL — built so tills keep selling without a connection and reconcile cleanly when it returns.'
order: 1
featured: true
isPublic: false
client: 'Built for a tier-one East African bank''s merchant arm'
tags: ['Go', 'Rust', 'PostgreSQL', 'Distributed systems']
stack: 'Go · Chi · pgx · Rust · Tauri · SQLite · PostgreSQL 17 · WebSocket · Docker'
---

## Context

Retail tills in the markets this serves can't assume a stable connection. The
terminal has to take payments, print receipts, and reconcile cash whether or not
the server is reachable, then sync cleanly when it comes back. That single
constraint shaped every decision in the system.

## What I built

I built the Go + Chi REST/WebSocket server — 26 domain packages and 35
migrations — and contributed to the Rust + Tauri terminal. Rather than run a
message broker, I used a PostgreSQL outbox with `LISTEN/NOTIFY` for the
event flow: one fewer moving part to operate and monitor. Terminals reconcile
catalog and inventory through a delta-sync protocol instead of full reloads.

## Highlights

- Offline-first terminal with local SQLite — sells and reconciles with zero connectivity, syncs on reconnect
- 26 server domains: catalog, pricing, tax, inventory, sales, returns, loyalty, gift cards, M-Pesa, fleet, audit, and more
- Broker-free event flow via a PostgreSQL outbox + `LISTEN/NOTIFY`
- Hardware integration through Rust adapter crates: scanner, printer, cash drawer, customer display, scale, EMV pinpad
- Multi-store from day one — every record is store-scoped
- Z-reports, split tender, supervisor PIN with offline validation, OTA terminal updates
