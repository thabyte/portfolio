---
title: 'Social-protection payment disbursement platform'
tagline: 'A multi-tenant Spring Boot platform disbursing cash transfers across multiple African markets.'
summary: 'A multi-tenant Spring Boot backend for disbursing social-protection payments to beneficiaries across multiple subsidiaries, with maker-checker controls and per-jurisdiction data isolation.'
order: 4
featured: true
isPublic: false
client: 'A tier-one East African bank'
tags: ['Java', 'Spring Boot', 'Multi-tenancy', 'Vue 3']
stack: 'Java 23 · Spring Boot 3.5 · MySQL · Redis · Elasticsearch 8 · Flyway · JWT · Vue 3 · TypeScript'
---

## Context

Disbursing social-protection payments means strict controls: every action
audited, every sensitive change reviewed, and per-country rules satisfied — all
from a single codebase serving multiple subsidiaries.

## What I built

I architected the multi-tenant backend with country-specific configuration and
per-jurisdiction data isolation, the beneficiary enrolment and card-issuance
flows, transaction processing, and the maker-checker approval workflow that
governs sensitive operations. I also delivered the Vue 3 + TypeScript operations
dashboard.

## Highlights

- One codebase serving 5+ subsidiaries with isolated, per-jurisdiction data
- Maker-checker approval workflow and full audit trails for compliance
- Elasticsearch-backed search; Redis caching on hot paths
- Duplicate-transaction detection, balance constraints, and dormant-account handling
- Integrations with core banking and identity systems (named generically for confidentiality)
