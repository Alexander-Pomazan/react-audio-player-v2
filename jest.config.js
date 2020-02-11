module.exports = {
  ...require('./test/jest.common'),
  projects: [
    './test/jest.client.js',
    './test/jest.eslint.js',
    './test/jest.stylelint.js',
  ],
}
