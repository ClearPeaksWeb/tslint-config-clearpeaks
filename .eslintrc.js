module.exports = {
  "extends": [],
  "plugins": ['prettier'],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "prefer-const": "error",
    "no-var": "error",
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "no-eval": "error",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "arrow-spacing": "error",
    "prefer-arrow-callback": "error",
    "arrow-parens": ["error", "as-needed"],
    "no-duplicate-imports": "error",
    "one-var-declaration-per-line": "error",
    "eqeqeq": "error",
    "curly": ["error", "multi-line"],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "no-else-return": "error",
    "spaced-comment": "error",
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "FunctionDeclaration": {
        "body": 1, "parameters": 2
      },
      "MemberExpression": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": ["ConditionalExpression"] 
    }],
    "valid-typeof": "error",
    "eol-last": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
    "comma-dangle": ["error", "only-multiline"],
    "semi-style": ["error", "last"],
    "semi": ["error", "always"],
    "camelcase": ["error", { "properties": "never" }],
    "no-console": ["error", { "allow": ["warn", "error", "debug"] }],
    "no-debugger": "error",
    "no-unused-vars": ["error", { "args": "after-used" }],
    "no-undef": "error"
  }
}
