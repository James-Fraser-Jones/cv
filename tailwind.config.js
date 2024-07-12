const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: '#202122',
				light: 'white',
				brand: '#3F00FF',
				link: '#36C',
				linkvisited: '#6B4BA1'
			},
			width: {
				a4: '210mm',
				'a4-inch': '235.4mm',
				dates: '22mm',
				'4-em': '1em'
			},
			height: {
				a4: '297mm',
				'a4-inch': '322.4mm',
				'5.5-em': '1.375em'
			}
		},
		fontFamily: {
			sans: ['"Inter Tight"', ...defaultTheme.fontFamily.sans],
			mono: ['"Source Code Pro"', ...defaultTheme.fontFamily.mono]
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
