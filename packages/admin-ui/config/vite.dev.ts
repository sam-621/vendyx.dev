import { defineConfig } from 'vite';
import { CommonViteConfig } from './vite.common';

// https://vitejs.dev/config/
export default defineConfig({
  ...CommonViteConfig,
  server: {
    port: 3000
  }
});
