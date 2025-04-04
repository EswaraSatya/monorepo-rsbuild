// import type { Config } from 'jest';

// export default {
//   displayName: 'app1',
//   preset: '../../jest.preset.js',
//   transform: {
//     '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
//     '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   coverageDirectory: '../../coverage/packages/app1',
//   globals: {
//     'ts-jest': {
//       tsconfig: '<rootDir>/tsconfig.jest.json'
//     }
//   }
// } satisfies Config;

import type { Config } from 'jest';

export default {
  displayName: 'app1',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/app1',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
      isolatedModules: true
    }
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
  // Apply the Jest module resolution fix for TypeScript compatibility
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
} satisfies Config;

