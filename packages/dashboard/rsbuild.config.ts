import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  html: {
    title: 'Dashboard',
  },
  source: {
    entry: {
      main: './src/app/app.tsx', // Ensure this file exists
    },
  },
});
