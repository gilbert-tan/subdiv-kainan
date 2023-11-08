import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  server: {
    port: process.env.APP_PORT || 8080, // Change the port to your preferred value
  },
  define: {
    'APP_PORT': process.env.APP_PORT,
  },
})
