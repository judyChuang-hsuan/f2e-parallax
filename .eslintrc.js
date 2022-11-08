module.exports = {
  root: 'true',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier':'error',
    'eol-last': 'off',
    'func-names': 'off',
    'no-empty-character-class': 2,
    'no-extra-parens': 0,
  },
}

