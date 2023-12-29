import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/svelte/',
  plugins: [svelte()],
  server: {
    port: 5003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
