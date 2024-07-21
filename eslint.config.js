// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'max-lines': ['warn', 400],
      'no-console': 'warn',
      'prefer-const': 'warn',
      'no-debugger': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        {
          'ignoredMethodNames': ['constructor'],
        },
      ],
      '@typescript-eslint/explicit-function-return-type': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@angular-eslint/no-output-native': 'warn',
      '@angular-eslint/no-input-rename': ['warn'],
      '@angular-eslint/no-output-on-prefix': ['warn'],
      '@angular-eslint/no-pipe-impure': ['warn'],
      '@angular-eslint/prefer-standalone': ['off'],
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/prefer-on-push-component-change-detection': ['error'],
      '@angular-eslint/directive-selector': [
        'error',
        {
          'type': 'attribute',
          'prefix': ['app', 'ui'],
          'style': 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          'type': 'element',
          'prefix': ['app', 'lib'],
          'style': 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    'rules': {
      '@angular-eslint/template/elements-content': 'warn',
      '@angular-eslint/template/prefer-self-closing-tags': ['warn'],
      '@angular-eslint/template/prefer-control-flow': ['error'],
    },
  },
);
