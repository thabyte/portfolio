---
title: 'USSD payments gateway'
tagline: 'A single Spring Boot gateway routing banking sessions across five telco providers in East Africa.'
summary: 'A Spring Boot gateway that fronts five telco providers behind a strategy-pattern abstraction, with Redis-backed session state and per-market localization — so new telcos slot in as one class, not a fork.'
order: 4
featured: true
isPublic: false
client: 'A tier-one East African bank'
tags: ['Java', 'Spring Boot', 'USSD', 'Redis']
stack: 'Java · Spring Boot · Redis · HTTP / SOAP telco integrations'
---

## Context

USSD is the rail many Africans actually use to bank — feature phones, no data
plan, *123#*. Each telco speaks a slightly different dialect of the protocol:
some POST JSON, some POST XML; session-id semantics drift; timeout windows
vary; the "end of session" signal lives in a different field. The goal was one
gateway that works across all of them from a single codebase, not five forks
held together with copy-paste.

## What I built

A Spring Boot gateway that sits between the bank's services and the telco
operators. Each provider's quirks — wire format, session shape, error
semantics, character encoding — are isolated behind a Strategy implementation
that conforms to one internal interface. The core handles everything that
should never be telco-specific: session state in Redis with a TTL matched to
the telco's session window, language selection, retry and timeout policy,
structured logging, and metrics.

## Highlights

- **5 telco providers** behind one HTTP API: Safaricom, Airtel, Lumitel, Econet, Telkom
- Strategy pattern keeps each telco's wire format and session shape isolated — adding a new operator is one new class
- Redis-backed sessions survive USSD's multi-step menu flows, with TTLs aligned to telco-specific session windows
- Per-session language selection (English, Swahili, and additional East African languages) — translation strings live outside the menu logic
- Designed around USSD's real constraints: ~160 characters per screen, short session windows, no client-side state, no retries the user sees
