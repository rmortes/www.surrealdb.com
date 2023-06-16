'use strict';

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	plugins: ['ember', 'only-error', 'prettier', 'unused-imports'],
	extends: [
		'eslint:recommended',
		'plugin:ember/recommended',
		'plugin:prettier/recommended',
		'plugin:json/recommended',
	],
	env: {
		browser: true,
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				extends: ['.prettierrc'],
			},
		],
		'unused-imports/no-unused-imports': 'error',
		'unused-imports/no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'no-unused-vars': [
			'error',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
	overrides: [
		// node files
		{
			files: [
				'./.eslintrc.js',
				'./.prettierrc.js',
				'./.template-lintrc.js',
				'./ember-cli-build.js',
				'./testem.js',
				'./blueprints/*/index.js',
				'./config/**/*.js',
				'./lib/*/index.js',
				'./server/**/*.js',
			],
			parserOptions: {
				sourceType: 'script',
			},
			env: {
				browser: false,
				node: true,
			},
			plugins: ['node'],
			extends: ['plugin:node/recommended'],
			rules: {
				// this can be removed once the following is fixed
				// https://github.com/mysticatea/eslint-plugin-node/issues/77
				'node/no-unpublished-require': 'off',
			},
		},
		{
			// Test files:
			files: ['tests/**/*-test.{js,ts}'],
			extends: ['plugin:qunit/recommended'],
		},
		{
			files: ['app/snippets/**'],
			rules: {
				'unused-imports/no-unused-vars': 0,
				'no-unused-vars': 0,
				'no-undef': 0,
			},
		},
	],
};
