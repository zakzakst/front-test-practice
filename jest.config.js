/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: { '^.+\\.(ts|tsx)$': ['esbuild-jest', { sourcemap: true }] },
  setupFilesAfterEnv: ['./jest.setup.ts'],
};