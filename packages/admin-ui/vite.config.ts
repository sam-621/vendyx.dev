import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   server: {
//     port: 3000
//   },
//   base:
// });

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000
  },
  base: mode === 'production' ? '/admin/' : '/',
  optimizeDeps: {
    include: ['@vendyx/common']
  },
  build: {
    commonjsOptions: {
      include: ['@vendyx/common', /node_modules/]
    }
  }
}));
