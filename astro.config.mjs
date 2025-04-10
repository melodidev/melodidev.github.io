// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://melodi.dev',
  trailingSlash: 'never',
  build: {
    assets: 'assets',
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const directories = {
              fonts: ['ttf', 'woff', 'woff2'],
              images: ['jpg', 'png', 'svg', 'webp'],
            };
            const ext = path
              .extname(assetInfo.name)
              .replace(/^\./, '')
              .toLowerCase();
            for (const key in directories) {
              if (directories[key].includes(ext)) {
                return `assets/${key}/[name]-[hash][extname]`;
              }
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
  },
});
