module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  // 코드를 분석할 수 있는 분석기
  parserOptions: {
    // 디폴트는 script , ecmascript(es6)라면 module
    sourceType: "module",
    // ecma버전
    ecmaVersion: "latest",
    // 종류가 Esprima, babel, typescript 있는데 타입스크립트로 지정한다
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
    // 문자열은 항상 쌍따옴표
    quotes: ["error", "double"],
    // 세미콜론 안 붙이면 항상 에러
    semi: ["error", "always"],
    // 마지막 , 찍어야함
    "comma-dangle": "off",
    // 조건에서 정확하지 않은 연산은 항상 에러로 표시
    "no-cond-assign": ["error", "always"],
    // 익명함수 뒤에 공백허용, 그 외 함수 공백허용 안함
    "space-before-function-paren": "off",
    //들여쓰기 검사 끔
    indent: "off",
    // eslint내에서 prettier가 돌아갈 때 prettier 규칙검사 끔
    "prettier/prettier": "off",
    //클래스안 프로퍼티 사이 공백 검사
    "lines-between-class-members": "off",
    // 컴포넌트안에 v-text, v-html 사용하는지 검사
    "vue/no-v-text-v-html-on-component": "off",
    // 한줄에 여러개의 프로퍼티 나열하지 않도록 검사
    "vue/max-attributes-per-line": "off",
    // 한줄에 html tag 여러개 쓰지 않도록 검사
    "vue/singleline-html-element-content-newline": "off",
    // 유효한 단일 루트 요소가 포함되어 있는지 확인?
    "vue/no-multiple-template-root": 0,
  },
};
