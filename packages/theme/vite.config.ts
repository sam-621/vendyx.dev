import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as packageJson from './package.json';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [
    react(),
    dts({
      include: ['src/components/']
    })
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'lib',
      formats: ['es', 'umd'],
      fileName: format => `index.${format}.js`
    }
  },
  rollupOptions: {
    external: [...Object.keys(packageJson.peerDependencies)]
  }
}));
