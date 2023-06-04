/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'react-native',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>src/__test-coverage-result__/',
  coverageReporters: ['text', 'html'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'LEmmyMartin Tests',
        outputDirectory: '<rootDir>/__test-coverage-result__/',
        outputName: 'junit.xml',
        classNameTemplate: '{classname} - {title}',
        titleTemplate: '{classname} - {title}',
        ancestorSeparator: ' > ',
      },
    ],
  ],
  transformIgnorePatterns: ['node_modules/(?!@react-native|react-native)'],
};
