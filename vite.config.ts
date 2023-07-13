import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getOutDir = (mode: string) => {
  if (mode === "production") return "build-prod"
  if (mode === "stg") return "build-stg"
  return "build"
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    outDir: getOutDir(mode)
  }
}))
