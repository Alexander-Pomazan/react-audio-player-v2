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
        react: {
          version: 'detect',
        },
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/no-default-export': 'error',
        'import/default': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'react/self-closing-comp': [
          'warn',
          {
            component: true,
            html: true,
          },
        ],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
          },
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_', // allow unused variables that start with underscore
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off', // because we need to move fast right now
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
}
