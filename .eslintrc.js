module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'es2021': true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'eqeqeq': 0, // the server may return string or numbers indistinctly
    'camelcase': 0, // the server may return snake_case variables
    'no-console': 0,
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'no-multi-spaces': 2,
    'no-unused-vars': [
      'error',
      { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }
    ],
    'comma-dangle': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'mode': 'strict' }]
  }
}
