module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
