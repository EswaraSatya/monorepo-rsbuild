import { getJestProjectsAsync } from '@nx/jest';

export default async () => {
  const projects = await getJestProjectsAsync();
  return {
    projects,
    // Add explicit TypeScript configuration for the root Jest config
    globals: {
      'ts-jest': {
        isolatedModules: true,
        tsconfig: 'tsconfig.spec.json' // Point to a root spec tsconfig
      }
    }
  };
};