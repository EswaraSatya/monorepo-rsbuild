import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    passWithNoTests: true, // Set it here once
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html'],
      reportsDirectory: '../../coverage/packages/dashboard',
    },
  },
});