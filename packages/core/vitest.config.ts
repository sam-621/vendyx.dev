import swc from 'unplugin-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    // alias: {
    //   '@/app': './src/app',
    //   '@/lib': './src/lib'
    // },
    root: './',
    deps: {
      interopDefault: true
    }
  },
  plugins: [swc.vite(), tsconfigPaths()]
});
