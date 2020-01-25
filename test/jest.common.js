const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-runner-stylelint/watch-fix',
  ],
}
