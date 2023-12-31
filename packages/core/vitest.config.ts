import swc from 'unplugin-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['./tests/**/*.e2e-spec.ts'],
    globals: true,
    setupFiles: ['./tests/utils/setup-e2e.ts']
  },
  plugins: [swc.vite(), tsconfigPaths()]
});
