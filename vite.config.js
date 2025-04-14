import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dotenv from 'dotenv'

dotenv.config()

// Add all the services you want to proxy dynamically
const services = [
  process.env.VITE_NEIL_MESSAGING_SERVICE,
  process.env.VITE_NEIL_USERMANAGEMENT_SERVICE,
  // Add more services here if needed
]

export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    chunkSizeWarningLimit: 10000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: services.reduce((acc, service) => {
      if (service) {
        acc[`/${service}`] = {
          target: process.env.VITE_GATEWAY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^/${service}`), `/${service}`),
        }
      }
      return acc
    }, {}),
  },
})
