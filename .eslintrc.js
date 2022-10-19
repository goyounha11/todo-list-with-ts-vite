module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  // 코드를 분석할 수 있는 분석기
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: false,
      jsx: false,
    },
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
      styleCSSVariableInjection: true,
    },
  },
  // 코드 검사 범위 설정
  env: {
    node: true,
    "vue/setup-compiler-macros": true, // DELETE: vue3 에서 제거
  },
  // 코드 검사 규칙
  extends: [
    /**
     * 레벨별로 강력한 단계
     * 'plugin:vue/vue3-essential', // Lv1
     * 'plugin:vue/vue3-strongly-recommended', // Lv2
     * 'plugin:vue/vue3-recommended', // Lv3
     *
     * "plugin:vue/recommended", << vue cli 2.x 이하에서 쓰던 plugin
     */
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "@vue/prettier",
    "plugin:prettier/recommended",
    "@vue/typescript",
  ],
  plugins: ["vue", "@typescript-eslint"],
  // 코드 규칙 작성
  // extends에서 작성한 eslint를 그대로 사용하면 생략 가능
  rules: {
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["warn", "error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": "off", // 마지막 , 찍어야함
    "no-cond-assign": ["error", "always"],
    "space-before-function-paren": "off",
    indent: "off",
    "prettier/prettier": "off",
    "lines-between-class-members": "off",
    "vue/no-v-text-v-html-on-component": "off",
    "vue/max-attributes-per-line": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-multiple-template-root": 0,
  },
};
