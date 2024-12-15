import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import MillionLint from "@million/lint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    MillionLint.vite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
