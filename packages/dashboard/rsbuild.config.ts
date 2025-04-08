import { defineConfig } from '@rsbuild/core';
import { join } from 'path';

export default defineConfig({
  html: {
    title: 'Dashboard',
  },
  source: {
    entry: {
      main: './src/app/app.tsx', // Ensure this file exists
    },
    alias: {
      'app1/Module': join(__dirname, '../../packages/app1/src/remote-entry.ts'),
      'app2/Module': join(__dirname, '../../packages/app2/src/remote-entry.ts')
    }
  },
});
