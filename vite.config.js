import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/',   // IMPORTANT pour GitHub Pages
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})

