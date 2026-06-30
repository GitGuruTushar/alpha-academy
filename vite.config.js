import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Base URL of the deployment.
  //  - Vercel / Netlify / custom domain serve at the ROOT, so the default is '/'.
  //  - GitHub Pages serves under a sub-folder; the deploy workflow sets
  //    VITE_BASE='/alpha-academy/' only for that build.
  // This way the SAME code works on every host with no white screen.
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
