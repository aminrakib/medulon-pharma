import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Custom domains at the root level need '/'
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "./src/components"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Ensures the module scripts are strictly formatted
    modulePreload: {
      polyfill: true,
    },
  },
});
