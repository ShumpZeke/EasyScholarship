import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // `@/foo` resolves to `src/foo` — used everywhere by shadcn/ui
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
