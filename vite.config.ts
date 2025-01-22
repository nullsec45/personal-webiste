import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'rama-fajar-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
        globPatterns: ['**/*.{js,jsx,css,html,ico,png,svg,webp,pdf,json}'],
      },
      manifest: {
        name: 'Rama Fajar',
        short_name: 'Rama Fajar',
        description: 'Rama Fajar Personal Portfolio Website built with React, Tailwind CSS, and Vite',
        theme_color:'#4f46e5',
        display: 'standalone',
        background_color: '#030712',
        icons: [
          {
            src: 'icon-48.png',
            sizes: '48x48',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-72.png',
            sizes: '72x72',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-144.png',
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon-168.png',
            sizes: '168x168',
            type: 'image/png',
            purpose: 'maskable',
          },

          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-420.png',
            sizes: '420x420',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        start_url: '/',
        screenshots: [
          {
            src: '/ss1.png',
            sizes: '1920x900',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Wonder Widgets',
          },
          {
            src: '/ss2.png',
            sizes: '1919x893',
            type: 'image/png',
            form_factor: 'wide',
            label: 'Wonder Widgets',
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
    }),
    ViteImageOptimizer({
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },
      png: {
        quality: 70,
      },

      jpg: {
        quality: 70,
      },

      webp: {
        lossless: true,
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
