import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
      plugins: [react()],
      root: "./",
      build: {
        rollupOptions: {
          input: {
            "index": "index.html",
          }
        },
        outDir: "../dist-frontend"
      }
    }
  }
)
