module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['pages/**/*.vue', 'components/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'max-len': ['error', { code: 120 }],
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 120,
      },
    ],
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
