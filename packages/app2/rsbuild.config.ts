import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  source: {
    entry: {
      main: './src/app/app.tsx', // Ensure this file exists
    },
  },
  html: {
    title: 'App2',
  },
});
