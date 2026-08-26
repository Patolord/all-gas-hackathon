import { getConvexUrl } from "@convex-dev/static-hosting";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@/App";
import { ThemeProvider } from "@/components/theme-provider";
import "@/style.css";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL ?? getConvexUrl());

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <ThemeProvider>
      <ConvexProvider client={convex}>
        <App />
      </ConvexProvider>
    </ThemeProvider>
  </StrictMode>,
);
