import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jest from 'eslint-plugin-jest';
import jestPlugin from "eslint-plugin-jest"

export default [
  // 1. Глобальные игноры
  {
    ignores: ['dist', 'build', 'node_modules', 'coverage', '*.config.js'],
  },

  // 2. Базовые рекомендации ESLint
  js.configs.recommended,

  // 3. Глобальные переменные (браузер + ES2021 + Node для конфигов)
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },

  // 4. Настройки React
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',

      // Полезные правила
      'react/prop-types': 'off',           // если не используете PropTypes
      'react/no-unescaped-entities': 'off', // часто мешает в JSX
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // 5. Настройки для тестов (Jest)
  {
    files: ['**/__tests__/**/*.{js,jsx}', '**/*.{spec,test}.{js,jsx}'],
    plugins: { jest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/consistent-test-it': ['error', { fn: 'test', withinDescribe: 'it' }],
    },
  },
];