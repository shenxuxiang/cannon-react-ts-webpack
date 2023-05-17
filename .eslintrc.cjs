module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
  ],
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
  },
  settings: {
    react: {
      version: "999.999.999"
    }
  },
  rules: {
    "radix": [0],
    "no-undef": [1],
    "max-params": [0],
    "no-debugger":[0],
    "no-return-assign": [0],
    "no-param-reassign": [0],
    "max-nested-callbacks": [0],
    "no-implicit-coercion": [0],
    "react/no-children-prop": [0],
    "@typescript-eslint/no-this-alias": [0],
    "@typescript-eslint/prefer-for-of": [0],
    "@typescript-eslint/member-ordering": [0],
    "@typescript-eslint/no-require-imports": [0],
    "@typescript-eslint/no-useless-constructor": [1],
    "@typescript-eslint/consistent-type-assertions": [0],
    "@typescript-eslint/consistent-type-definitions": [0],
    "@typescript-eslint/explicit-member-accessibility": [0],
  }
}
