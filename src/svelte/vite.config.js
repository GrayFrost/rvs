import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import qiankun from 'vite-plugin-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/svelte/',
  plugins: [
    svelte(),
    qiankun('svelte', {
      useDevMode: true
    })
  ],
  server: {
    port: 5003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
