module.exports = {
  ...require('./jest.common'),
  displayName: 'style',
  runner: 'jest-runner-stylelint',
  testMatch: ['<rootDir>/**/src/**/*.+(js|jsx|ts|tsx)'],
}
