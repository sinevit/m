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
            'no-console': 'off',
            semi: 'warn',
            'linebreak-style': 'off',
            'space-infix-ops': 'off',
            'no-tabs': 'warn',
            'no-debugger': 'error',
            'global-require': 'off',
            'import/prefer-default-export': 'off',
            'no-case-declarations': 'off',
            'max-classes-per-file': 'off',
            'import/no-extraneous-dependencies': 'off',
            'class-methods-use-this': 'off',
            'no-param-reassign': 'off',
            'operator-assignment': 'off',
            'no-shadow': 'off',
            'no-restricted-syntax': 'warn',
            'no-plusplus': 'warn',
            'no-underscore-dangle': 'off',
            'no-empty': 'warn',
            'no-useless-escape': 'warn',
            eqeqeq: 'warn',
            'no-lonely-if': 'warn',
            'import/extensions': 'off',
            'no-fallthrough': 'warn',
            'consistent-return': 'off',
            'guard-for-in': 'warn',
            'prefer-destructuring': 'off',
            'no-self-assign': 'off',
            radix: 'off',
            'no-mixed-operators': 'off',
            'array-bracket-spacing': ['error', 'never'],
            'no-multiple-empty-lines': ['error', {max: 1}],
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/array-type': 'error',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-useless-constructor': 'warn',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {},
    },
);
