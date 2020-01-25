module.exports = {
  ...require('./jest.common'),
  displayName: 'style',
  runner: 'jest-runner-stylelint',
  testMatch: ['<rootDir>/**/src/**/*.+(ts|tsx)'],
}
