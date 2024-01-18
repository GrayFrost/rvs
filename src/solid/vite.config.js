import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import qiankun from 'vite-plugin-qiankun'

export default defineConfig({
  plugins: [
    solid(),
    qiankun('solid', {
      useDevMode: true
    })
  ],
  server: {
    port: 5004,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
