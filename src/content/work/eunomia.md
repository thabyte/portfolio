---
title: 'Eunomia — AI banking-compliance engine'
tagline: 'Upload a regulator''s circular, get back a structured impact brief — obligations extracted, policy gaps flagged, products mapped.'
summary: 'A multi-agent compliance system over a bank''s policy catalog. Extractor → Mapper → ImpactAnalyzer → Summarizer pipeline on Kotlin + Spring Boot + pgvector, with a React dashboard and a live deployment.'
order: 2
featured: true
isPublic: true
tags: ['Kotlin', 'Spring Boot', 'RAG', 'Multi-agent', 'pgvector']
stack: 'Kotlin 2 · Spring Boot 3 · Spring Security (JWT) · PostgreSQL + pgvector · LangChain4j · Groq Llama 3.3 70B · Cohere embed-english-v3.0 · React 18 · Vite · TypeScript · Tailwind · Testcontainers · Docker · Render · GitHub Actions'
liveUrl: 'https://eunomia-web.vercel.app/'
repoUrl: 'https://github.com/thabyte/eunomia-compliance-engine'
---

## Context

When a regulator publishes a new circular, a bank's compliance team spends days reading it, mapping it against the bank's existing policy catalog, identifying affected products, and writing an impact brief for leadership. Most of that work is structured — extract obligations, look them up against current state, score gaps, summarise findings — but it's the kind of structure that drowns under volume. Eunomia is an AI engine that does this end-to-end for a synthetic bank, turning a regulatory PDF into an actionable impact brief in minutes.

Built as the capstone project for an MSc in Software Engineering. Synthetic bank, real regulator format, real workflow.

The code is public on [GitHub](https://github.com/Kalunge/eunomia-compliance-engine), and the deeper architecture and testing rationale is documented in [this technical write-up](https://github.com/Kalunge/eunomia-compliance-engine/blob/main/design_and_testing.md).

## What I built

A multi-agent backend that orchestrates four specialist agents over an uploaded regulatory document — Extractor pulls the obligations, Mapper retrieves matching internal-policy passages via RAG against a pgvector store, ImpactAnalyzer scores each obligation as covered / partial / gap, and Summarizer produces the structured executive brief. A React + TypeScript dashboard layers in authentication, the internal policy catalog, regulation ingestion, real-time agent telemetry, and an overview. One Docker container, deployed to Render with CI/CD gating on a real Postgres + pgvector via Testcontainers.

## Highlights

- **Multi-agent workflow** orchestrated with a saga pattern; each agent's progress streams to the dashboard in real time
- **Single datastore for relational state and embeddings** via PostgreSQL + pgvector — one connection pool, one backup story, no second store to operate
- **Strategy-pattern provider selection** for AI calls — swap Groq for OpenAI or Anthropic by changing one config line; embeddings provider chosen the same way
- **Bulkhead isolation** between agents so a slow Mapper doesn't starve the Extractor
- **Multi-tenant context** carried through the request lifecycle so every query is tenant-scoped by construction
- **Testcontainers-backed integration tests** spin up real Postgres + pgvector, so the RAG path is tested against the actual database engine, not a mock
