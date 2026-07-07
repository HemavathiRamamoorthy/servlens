# Architecture Decision Log (ADL)

This document captures the important technical decisions made while building OpsPilot AI, along with the reasoning behind each choice.

---

## ADR-001: Maven instead of Gradle

**Decision**

Use Maven as the build tool.

**Reason**

I have extensive experience with Maven in enterprise Java projects. It integrates well with Spring Boot and keeps the focus on application architecture rather than learning a new build tool.

---

## ADR-002: Mock Data before Database

**Decision**

Expose REST APIs using mock data before integrating PostgreSQL.

**Reason**

This allows frontend and backend development to progress independently and stabilizes API contracts before introducing persistence.

---

## ADR-003: Separate UI and Backend

**Decision**

Create independent Angular and Spring Boot projects.

**Reason**

This reflects modern enterprise architecture and enables independent deployment and scaling.

---

## ADR-004: Swagger

**Decision**

Expose REST APIs using OpenAPI/Swagger.

**Reason**

Improves API discoverability and supports future AI integration using OpenAPI specifications.

---

## ADR-005: AI Integration (Future)

**Decision**

Delay AI implementation until the core application is complete.

**Reason**

AI should enhance a working enterprise application rather than become the primary focus. This approach keeps the project grounded in solving operational problems.
