import path, { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      include: ['src/']
    })
  ],
  build: {
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'lib',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}));
