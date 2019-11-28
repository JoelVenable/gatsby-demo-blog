module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb', 'airbnb/hooks', 'prettier/react'],
  rules: {
    semi: [2, 'never'],
  },
}
