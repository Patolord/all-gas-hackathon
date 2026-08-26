# Hackathon log

- **Project:** all-gas-hackathon
- **Event:** Convex All Gas Hackathon
- **What it does:** Realtime shadcn counter stored in Convex and meant to ship on Convex static hosting.
- **Live app:** not deployed
- **Repo:** https://github.com/Patolord/all-gas-hackathon
- **Frontend:** Convex static hosting
- **Convex deployment:** https://valuable-magpie-385.convex.cloud
- **Components:** @convex-dev/static-hosting, @firecrawl/firecrawl-convex, @agentmail/convex
- **Convex features:** schema, indexes, queries, mutations, realtime queries, HTTP actions
- **Auth:** none
- **AI models:** none
- **Started:** 2026-08-25T23:58:27Z
- **Last updated:** 2026-08-26T01:02:18Z

## Log

### 2026-08-25 - working tree

Opened an empty Git repository, then started from [xixixao/template-vp-shadcn-convex-host](https://github.com/xixixao/template-vp-shadcn-convex-host) (Vite+, shadcn/ui, Convex). Wired latest `@convex-dev/static-hosting` 0.2.x with component-owned root routing. The homepage loads and updates a Convex counter (`web/App.tsx`, `convex/schema.ts`, `convex/counter.ts`, `convex/convex.config.ts`). Local verify: increment and decrement at http://localhost:5173/. Convex features: schema, indexes, query, mutation, realtime queries.

### 2026-08-26 - working tree

Registered Firecrawl and AgentMail as Convex components. Firecrawl is mounted at `/firecrawl/` with env validation; AgentMail handles POST `/agentmail/webhook` through an HTTP action (`convex/convex.config.ts`, `convex/http.ts`). Ignored Firecrawl CLI output in `.gitignore`. The homepage is still the realtime counter. Convex features: HTTP actions, registered components.
