module.exports = {
  extends: ["plugin:prettier/recommended", "eslint:recommended"],
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    camelcase: "error",
    "no-var": "error",
    "prefer-const": "warn",
    "no-shadow": "error",
  },
};
