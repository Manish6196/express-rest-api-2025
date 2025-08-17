import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import jest from 'eslint-plugin-jest';
import EslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default defineConfig([
  {
    ignores: ['dist/'],
  },
  {
    files: ['src/**/*.{js,ts,jsx,tsx}', 'tests/**/*.{js,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.{js,ts,jsx,tsx}'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'jest/prefer-expect-assertions': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      quotes: ['error', 'single'], // Enforces single quotes
      'prettier/prettier': [
        'error',
        { singleQuote: true, jsxSingleQuote: true },
      ], // Ensures Prettier rule is applied
    },
  },
  EslintPluginPrettierRecommended,
]);
