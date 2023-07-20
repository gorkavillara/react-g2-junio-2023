/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

const getOutDir = (mode: string) => {
  if (mode === "production") return "dist"
  if (mode === "stg") return "build-stg"
  return "build"
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: getOutDir(mode),
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["html", "text"]
    },
  },
}))
