import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
  publicDir: "web/public",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": new URL("./web", import.meta.url).pathname,
    },
  },
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    ignorePatterns: ["convex/_generated/**"],
  },
  run: {
    tasks: {
      "dev:setup": {
        command: "convex dev --once",
        cache: false,
      },
      "dev:web": {
        command: "vp dev",
        cache: false,
        dependsOn: ["dev:setup"],
      },
      "dev:backend": {
        command: "convex dev",
        cache: false,
        dependsOn: ["dev:setup"],
      },
      dev: {
        command: "true",
        cache: false,
        dependsOn: ["dev:web", "dev:backend"],
      },
    },
  },
  lint: {
    ignorePatterns: ["convex/_generated/**"],
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    plugins: [
      "eslint",
      "typescript",
      "oxc",
      "import",
      "unicorn",
      "react",
      "jsx-a11y",
      "react-perf",
    ],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
});
