import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
	eslint.configs.recommended,

	// jest specific rules
	{
		plugins: {
			jest: jest,
		},
		files: ["**/*.test.js"],
		rules: {
			...jest.configs.recommended.rules,
			"jest/no-disabled-tests": "warn",
			"jest/no-focused-tests": "error",
			"jest/no-identical-title": "error",
		},
	},
	{
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				console: "readonly",
			},
		},
		rules: {
			// Basic style rules
			indent: ["error", "tab"],
			"no-tabs": "off",
			semi: ["error", "always"],

			// Visibility and error highlighting
			"no-unused-vars": [
				"error",
				{
					vars: "all",
					args: "none",
					caughtErrors: "all",
				},
			],
			"no-console": "warn",
			eqeqeq: "error",

			// Additional error highlighting rules
			"no-unused-expressions": "error",
			"no-unreachable": "error",
			"no-empty": "error",
			"no-extra-semi": "error",
		},
	},

	// Ignore specific files/directories
	{
		ignores: ["node_modules/", "dist/", "build/"],
	},
];
