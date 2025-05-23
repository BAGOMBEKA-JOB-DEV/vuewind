import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    chunkSizeWarningLimit: 10000,
  },
  server:{
port: 5173,
host: '10.160.0.57'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

})
