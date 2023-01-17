import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "src": path.resolve(__dirname, "src"),
      "utils": path.resolve(__dirname, "utils"),
      "pksav": path.resolve(__dirname, "pksav"),
    }
  },
  build: {
    rollupOptions: {
      external: new RegExp('/tools/.*')
    },
  }
})
