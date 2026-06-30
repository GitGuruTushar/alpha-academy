import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://<user>.github.io/alpha-academy/ on GitHub Pages.
  // If you later deploy at a domain root (Netlify/Vercel/custom domain),
  // change this back to '/'.
  base: '/alpha-academy/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
