import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cal-catalana-suria-4/', // Crucial para que los assets carguen correctamente en GitHub Pages
})