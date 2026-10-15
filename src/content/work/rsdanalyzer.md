---
title: 'RSDAnalyzer — AI-assisted code analysis and MCP tooling'
tagline: 'A source-grounded AI workflow for investigating Windows code and managing connection annotations safely.'
summary: 'Microsoft Master''s internship work on MCP tools, AI evaluation, controlled writes, and an accessible workflow for Windows code analysis.'
order: 2
featured: true
isPublic: false
client: 'Microsoft — Master''s internship'
tags: ['AI agents', 'MCP', 'Evaluation', 'ASP.NET Core']
stack: 'C# · .NET · ASP.NET Core · React · TypeScript · Fluent UI · EF Core · SQL Server · MCP · CQRS'
---

## Context

RSDAnalyzer helps engineers investigate Windows code repositories and reason about
connections identified by an AI-assisted workflow. The challenge was to make
repository search, connection metadata, annotation review, and controlled writes
useful through one connected experience without weakening correctness or safety.

This work was completed during my Master's internship at Microsoft. The code
and internal systems are proprietary, so this case study describes the
engineering work without exposing confidential implementation details.

## What I built

I contributed to the AI workflow and developed and integrated MCP tools that
allowed it to inspect repository metadata, search code, retrieve connection
information, check existing annotations, and create annotations through
controlled write operations. I also helped modernize the RSDAnalyzer experience
with an accessible React, TypeScript, and Fluent UI workflow for builds,
connections, annotations, and review.

## Reliability and safety

- Read operations were kept separate from writes, with human approval required
  before annotation changes
- Refactored telemetry creation from a large MCP method into a CQRS command and
  handler
- Moved slower external-service work out of the synchronous MCP path to reduce
  timeout risk and partial failures
- Used source-grounded evaluation to distinguish supported results from
  unsupported or hallucinated responses

## Reported evaluation results

- Precision: **35.0% → 69.2%**
- Recall: **16.3% → 62.8%**
- F1: **22.2% → 65.9%**
- Exact connection-detail accuracy: **30.6% → 83.6%**
- High-confidence hallucinations: **67 → 13**
- No-write safety: **100%**
