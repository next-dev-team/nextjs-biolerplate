/** @type {import('tailwindcss/types').Config} */
let config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@headlessui/tailwindcss'),
	],
};

module.exports = config;
