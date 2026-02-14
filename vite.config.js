import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'EIV-catamarca.github.io/', //nombre del repo
  plugins: [react()],
})
