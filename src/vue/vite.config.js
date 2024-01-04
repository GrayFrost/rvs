import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vue/',
  plugins: [
    vue(),
    qiankun('vue', {
      useDevMode: true
    })
  ],
  server: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
