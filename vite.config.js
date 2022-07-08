import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            'babel-plugin-styled-components',
            {
              displayName: process.env.NODE_ENV !== 'production',
            },
          ],
        ],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
});
