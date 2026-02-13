import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Esto expone el proyecto a tu IP local
    port: 5173
  },
  plugins: [react()],
})
