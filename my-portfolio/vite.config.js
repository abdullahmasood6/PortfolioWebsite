// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  base: '/PortfolioWebsite/', // 👈 ADD THIS LINE
  plugins: [
    react(),
    imagetools({ force: true })
  ],
  build: {
    brotliSize: true
  }
});
