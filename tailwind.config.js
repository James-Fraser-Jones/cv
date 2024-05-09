const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#0e8c7f'
			},
			width: {
				a4: '210mm'
			},
			height: {
				a4: '297mm'
			}
		},
		fontFamily: {
			sans: ['"Inter Tight"', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { 'font-size': '10pt' }
			});
		}),
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.small-caps': {
					'font-variant': 'small-caps'
				}
			});
		})
	]
};
