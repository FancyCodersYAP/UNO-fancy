import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';
import app from './app/app';

dotenv.config();

import express from 'express';
import * as fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';
import { YandexAPIRepository } from './repository/YandexAPIRepository';

interface SSRModule {
  render: (
    uri: string,
    repository: any
  ) => Promise<[Record<string, any>, string, any]>;
}

const isDev = () => process.env.NODE_ENV === 'development';

export const startSSR = async () => {
  let vite: ViteDevServer | undefined;
  const srcPath = path.dirname(require.resolve('client'));
  let distPath: string, ssrClientPath: string;

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  } else {
    distPath = path.dirname(require.resolve('client/dist/index.html'));
    ssrClientPath = require.resolve('client/ssr-dist/ssr.cjs');

    app.use('/assets', express.static(path.resolve(distPath, 'assets')));
  }

  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        );

        template = await vite!.transformIndexHtml(url, template);
      }

      let mod: SSRModule;

      if (isDev()) {
        mod = (await vite!.ssrLoadModule(
          path.resolve(srcPath, 'ssr.tsx')
        )) as SSRModule;
      } else {
        mod = await import(ssrClientPath);
      }

      const { render } = mod;
      const [initialState, appHtml, css] = await render(
        url,
        new YandexAPIRepository(req.headers['cookie'])
      );

      const stateMarkup = `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(
        initialState
      ).replace(/</g, '\\u003c')}</script>`;

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace('<!--preloadedState-->', stateMarkup)
        .replace(`<!--styles-->`, css);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });
};
