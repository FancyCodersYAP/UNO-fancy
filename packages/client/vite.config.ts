import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(process.env.CLIENT_PORT) || 3000,
    },
    define: {
      __APP_ENV__: env,
    },
    plugins: [
      react({
        babel: {
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                ssr: false,
                displayName: true,
                fileName: false,
              },
            ],
          ],
        },
      }),
    ],
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
      },
    },
  };
});
