const path = require('path')

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  settings: { 'import/resolver': 'node' },
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
      },
      files: 'src/**/*.+(ts|tsx)',
      extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'eslint-config-prettier',
        'eslint-config-prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['react', '@typescript-eslint', 'react-hooks'],
      settings: {
        'import/resolver': 'webpack',
      },
    },
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js'),
          },
        },
      },
    },
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
