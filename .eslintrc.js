module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    // vue 코드 규칙
    //'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', // Lv2
    //'plugin:vue/vue3-recommended', // Lv3

    // js 코드 규칙
    'eslint:recommended'

  ],
  parserOptions: {  // parserOptions에는 기본적으로 코드를 분석할 수 있는 분석기를 지정해주어야함.
    parser: 'babel-eslint'
  }, 
  rules: {
      "singleline": "never",
      "multiline": "always",
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
  
}