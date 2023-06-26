module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  // rules: {
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       endOfLine: 'auto',
  //     },
  //   ],
  //   'react-hooks/exhaustive-deps': 0,
  //   'react/prop-types': 0,
  //   'react/display-name': 0,
  //   'react/no-unescaped-entities': 0,
  //   'no-unused-vars': [
  //     1,
  //     { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
  //   ],
  // },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
