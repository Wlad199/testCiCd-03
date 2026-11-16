// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().append({
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'vue/multi-word-component-names': 'off',
	},
})