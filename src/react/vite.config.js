import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/react',
  plugins: [
    react(),
    qiankun('react', {
      useDevMode: true
    })
  ],
  server: {
    port: 5001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
