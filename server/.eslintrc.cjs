module.exports = {
  root: true,
  env: { node: true, commonjs: true },
  extends: [
    'eslint:recommended',
    'plugin:airbnb-base/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['react-refresh'],
};
