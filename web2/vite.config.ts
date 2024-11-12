/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: 'src/public',
    cacheDir: `../../node_modules/.vite`,

    build: {
      outDir: '../../dist/apps/web2/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    ssr: {
      noExternal: ['@apollo/client/core'],
    },
    plugins: [
      analog({
        ssr: true,
        prerender: {
          routes: ['/'],
        },
      }),
      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    optimizeDeps: { include: ['zone.js', '@apollo/client/core'] },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
