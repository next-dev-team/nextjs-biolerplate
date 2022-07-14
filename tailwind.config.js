const plugins = require('tailwindcss/plugin');

const utilities = plugins(({ addUtilities }) => {
	addUtilities({
		'.inset-center': {
			top: '50%',
			left: '50%',
			'@apply -translate-x-1/2 -translate-y-1/2': {},
		},
		'.inset-y-center': {
			top: '50%',
			'@apply -translate-y-1/2': {},
		},
		'.inset-x-center': {
			left: '50%',
			'@apply -translate-x-1/2': {},
		},
	});
});

/** @type {import('tailwindcss/types').Config} */
let config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss'),
		require('@tailwindcss/line-clamp'),
		utilities,
	],
};

module.exports = config;
