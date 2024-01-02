import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react',
  plugins: [react()],
  server: {
    port: 5001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
