const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules', path.join('../')],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-stylelint/watch-fix',
  ],
}
