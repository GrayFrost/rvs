import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue/',
  plugins: [vue()],
  server: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
