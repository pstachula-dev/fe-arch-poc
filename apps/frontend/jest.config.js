const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['../../common-configs/jest-setup.js'],
  moduleDirectories: ['node_modules', './src'],
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 20000,
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      functions: 75,
      lines: 75,
    },
  },
  moduleNameMapper: {
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@atoms/(.*)$': '<rootDir>/src/atoms/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
