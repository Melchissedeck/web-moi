// vite.config.js
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config'; // Change import
export default defineConfig({
  base: '/web-moi/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});