import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: 'dist',
    },
    cleanDistPath: true,
  },
  source: {
    entry: {
      index: './src/index.tsx',
    },
  },
  performance: {
    buildCache: false,
  },
});