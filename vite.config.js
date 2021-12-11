import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import macrosPlugin from 'vite-plugin-babel-macros';

import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin(), svgrPlugin({
    svgrOptions: {
      icon: true,
      // ...svgr options (https://react-svgr.com/docs/options/)
    },
  })],
  define: {
    'process.platform': JSON.stringify('win32'),
    'process.env': {},
  },
});
