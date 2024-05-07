const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: '#0e8c7f'
			},
			width: {
				'first-column': '69px',
				'last-column': '133px'
			}
		},
		fontFamily: {
			sans: ['"Inter Tight"', ...defaultTheme.fontFamily.sans]
		}
	},
	plugins: []
};
