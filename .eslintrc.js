module.exports = {
  root: true,
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-plugin-no-inline-styles', "eslint-plugin-tsdoc"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules:{
    "no-inline-styles/no-inline-styles": 2,
    "tsdoc/syntax": "warn"
  }
};
