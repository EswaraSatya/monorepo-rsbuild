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
  }
} satisfies Config;
