import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: {
    entry: {
      main: './src/index.tsx', // Ensure this file exists
    },
  },
  html: {
    title: 'App1',
  },
});
