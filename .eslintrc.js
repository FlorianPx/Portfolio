module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/all',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'react-hooks', 'sort-destructure-keys'],
  rules: {
    // Errors
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': ['error', { ignore: ['dataTestId'] }],
    quotes: [2, 'single', { avoidEscape: true }],
    // Warnings
    'no-console': 'warn',
    'import/order': ['warn', { 'newlines-between': 'always' }],
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        memberSyntaxSortOrder: ['single', 'all', 'multiple', 'none'],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['warn', { caseSensitive: false }],
    'react-hooks/exhaustive-deps': 'warn',
    'react/sort-prop-types': ['warn', { ignoreCase: true, sortShapeProp: true }],
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }],
    'react/jsx-max-depth': 'off',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-newline': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-no-literals': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-multi-comp': 'off',
    'react/no-danger': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-no-leaked-render': 'off',
    'react/no-unescaped-entities': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolve': {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
}
