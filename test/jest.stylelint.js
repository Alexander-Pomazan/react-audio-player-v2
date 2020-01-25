const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  displayName: 'style',
  runner: 'jest-runner-stylelint',
  testMatch: ['<rootDir>/**/src/**/*.+(js|jsx|ts|tsx)'],
}
