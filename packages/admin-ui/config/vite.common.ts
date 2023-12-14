import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export const CommonViteConfig = defineConfig({
  plugins: [react()]
});
