# Initial Setup

Install [vite+](https://viteplus.dev/guide/#install-vp).

Clone this repo, then `vp i`.

# Convex

The counter is stored in [Convex](https://docs.convex.dev/). Run `vp run dev` to start the web app and Convex backend together. It runs `convex dev --once` first (first run logs you in and creates a deployment, which writes `VITE_CONVEX_URL` to `.env.local`), then starts `dev:web` and `dev:backend` in parallel.

The Convex backend also hosts the built web app via [`@convex-dev/static-hosting`](https://github.com/get-convex/static-hosting). After a backend is running, `vp run deploy:dev` uploads the Vite build to the dev deployment (served at `VITE_CONVEX_SITE_URL`). `vp run deploy` builds and deploys backend plus static files to production at `https://<deployment>.convex.site`.

# Using Vite+, the Unified Toolchain for the Web

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.
