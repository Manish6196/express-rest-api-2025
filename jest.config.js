module.exports = {
  // Use ts-jest preset for testing TypeScript files with Jest
  preset: 'ts-jest',

  // Set the test environment to Node.js
  testEnvironment: 'node',

  // Specify the directory where Jest should look for test files
  roots: ['<rootDir>/tests'],

  // Use ts-jest to transform TypeScript files
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Regex pattern to find test files
  testRegex: '((\\.|/)(test|spec))\\.tsx?$',

  // File extensions to recognize in module resolution
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
