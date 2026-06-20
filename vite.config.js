import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Served from a subpath on GitHub Pages in production, root in dev.
  base: command === "build" ? "/job-portal-ui/" : "/",
  plugins: [react(), tailwindcss()],
}));
