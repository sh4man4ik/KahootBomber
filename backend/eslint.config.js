import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: { jsx: true },
				project: './tsconfig.json'
			},
			globals: {
				...globals.browser,
				...globals.node,
				ObjectId: 'readonly',
				JSX: 'readonly'
			}
		},

		plugins: {
			'@typescript-eslint': tsPlugin
		},

		rules: {
			semi: ['error', 'always'],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'no-undef': 'warn',
			'prefer-const': 'off'
		}
	}
];
