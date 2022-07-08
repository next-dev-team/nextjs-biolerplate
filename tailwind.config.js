/** @type {import('tailwindcss/types').Config} */
let config = {
	content: ['./src/{pages,components}/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'media',
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss'),
	],
};

module.exports = config;
