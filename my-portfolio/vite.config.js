// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';   // ← correct package name

export default defineConfig({
  plugins: [
    react(),
    imagetools({ force: true })
  ],
  build: {
    brotliSize: true
  }
});