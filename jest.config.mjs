import { pathsToModuleNameMapper } from 'ts-jest';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { compilerOptions } = require('./tsconfig.json');

export default {
  // Use ts-jest preset for testing TypeScript files with Jest
  preset: 'ts-jest',

  // Set the test environment to Node.js
  testEnvironment: 'node',

  // Specify the directory where Jest should look for test files
  roots: ['./src/tests'],

  // Use ts-jest to transform TypeScript files
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  // Regex pattern to find test files
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',

  // File extensions to recognize in module resolution
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],

  // Map TypeScript paths to module names
  modulePaths: [compilerOptions.baseUrl],

  // Map TypeScript paths to Jest module names
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
};
