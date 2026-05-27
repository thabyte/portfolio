---
title: 'Fintech Policy RAG Assistant'
tagline: 'Grounded Q&A over fintech policy — every claim cited, hallucinations caught, honest about its own limits.'
summary: 'A production RAG system: ask a policy question in plain English, get an answer grounded in the exact section with citations — and a polite refusal when the corpus does not cover it.'
order: 2
featured: true
isPublic: true
tags: ['Python', 'LangChain', 'RAG', 'FastAPI']
stack: 'Python 3.11 · LangChain · ChromaDB · Groq Llama 3.3 70B · FastAPI · Streamlit · Caddy · Docker · GitHub Actions · pytest'
liveUrl: 'https://fintech-policy-rag.onrender.com/'
repoUrl: 'https://github.com/Kalunge/fintech-policy-rag'
---

## Context

RAG demos are easy to fake and hard to trust. I wanted to build one an actual
compliance team could rely on: every claim cited, hallucinations caught, and
honest about how well it really works. The corpus is twelve self-authored
synthetic fintech policies — no real customer data.

## What I built

A complete system, not a notebook: a FastAPI service, a Streamlit chat UI, a
ChromaDB vector store, a five-stage retrieval pipeline, an evaluation harness, a
single-container Docker bundle behind Caddy, and a CI/CD pipeline that gates
deployment on passing tests.

## Highlights

- Citation parsing maps every `[Source N]` back to the exact document section and chunk
- Two guardrail layers plus a distance-threshold refusal that short-circuits before paying LLM cost
- Dual embedding backends (local `bge-small` / hosted Cohere) with a dimension-mismatch guard
- Vector store baked at build time for fast cold starts
- Evaluation: 25 curated questions at 100% groundedness / citation / refusal — with a written, honest explanation of why that's a ceiling, not a real-world number
- p50 ~540ms end-to-end interactive latency
