const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#990D35',
				link: '#D52941',
				linkvisited: '#D52979'
			},
			width: {
				a4: '210mm',
				dates: '30mm',
				'4-em': '1em'
			},
			height: {
				a4: '297mm',
				'5.5-em': '1.375em'
			}
		},
		fontFamily: {
			sans: ['"Inter Tight"', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				html: { 'font-size': '11pt' }
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
