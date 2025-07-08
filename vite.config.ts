/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/main" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      core: path.resolve(__dirname, 'src/core'),
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/styles'),
    },
  },
});
