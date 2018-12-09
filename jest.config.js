module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>mocks/fileMock.js',
    '\\.(css|scss)$': '<rootDir>mocks/styleMock.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/setupJest.js',
  collectCoverageFrom: ['src/**', '!src/**/*stories.js', '!src/index.js'],
  testURL: 'http://localhost/',
  collectCoverage: true
};
