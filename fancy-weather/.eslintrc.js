module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "@vue/airbnb"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": ["error", "never"],
    "vue/singleline-html-element-content-newline": ["warn", { ignores: ["span", "i"] }],
    "vue/attribute-hyphenation": ["warn", "always"]
  }
};
