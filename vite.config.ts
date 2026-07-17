import path from "node:path";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { devtools } from "@tanstack/devtools-vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // OneDrive-synced working directory flushes writes in stages — give the
    // watcher time to settle so HMR doesn't fire on a half-written file.
    watch: { awaitWriteFinish: { stabilityThreshold: 1000, pollInterval: 100 } },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
  plugins: [
    ...(mode === "development" ? [devtools()] : []),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    viteReact(),
    netlify(),
  ],
}));
