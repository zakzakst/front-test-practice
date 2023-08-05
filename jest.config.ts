/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.(ts|tsx)$': ['esbuild-jest', { sourcemap: true }] },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '__reports__',
        filename: 'jest.html',
      },
    ],
  ],
};