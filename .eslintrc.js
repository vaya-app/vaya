module.exports = {
  extends: [
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "max-len": ["error", 120],
    "no-multiple-empty-lines": ["error", { "max": 2 }]
  }
};