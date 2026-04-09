export default {
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react|@testing-library|react-dom)/)',
  ],
  testMatch: ['<rootDir>/app/javascript/**/*.test.(js|jsx)'],
};
