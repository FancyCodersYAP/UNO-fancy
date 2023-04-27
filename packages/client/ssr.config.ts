import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
      utils: path.resolve(__dirname, './src/utils'),
      api: path.resolve(__dirname, './src/api'),
      types: path.resolve(__dirname, './src/types'),
      styles: path.resolve(__dirname, './src/styles'),
      img: path.resolve(__dirname, './src/img'),
      contexts: path.resolve(__dirname, './src/contexts'),
      assets: path.resolve(__dirname, './src/assets'),
      hooks: path.resolve(__dirname, './src/hooks'),
      data: path.resolve(__dirname, './src/data'),
      game: path.resolve(__dirname, './src/game'),
    },
  },
  plugins: [react()],
  build: {
    outDir: 'ssr-dist',
    ssr: true,
    lib: {
      entry: path.resolve(__dirname, 'ssr.tsx'),
      name: 'client',
      formats: ['cjs'],
    },
    rollupOptions: {
      output: {
        dir: 'ssr-dist',
      },
    },
  },
  ssr: {
    format: 'cjs',
  },
});
