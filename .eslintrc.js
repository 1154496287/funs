
module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true  // 支持jest
	},
	extends: [
		'standard',
		"prettier"
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
	}
}
