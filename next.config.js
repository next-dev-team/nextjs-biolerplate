// const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
	esModule: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['avatars.githubusercontent.com'],
	},
	webpack(config) {
		const autoImport = require('unplugin-auto-import/webpack')({
			dts: './auto-import.d.ts',
			imports: ['react'],
			// Auto import for all module exports under directories
			// when using in file names mostly use prefixes _ and $ to avoid conflicts
			dirs: [
				'./src/hooks',
				'./src/utils',
				'./src/stores',
				'./src/api',
				'./src/services',
				'./src/components',
				// ...
			],
		});
		config.plugins.push(autoImport);
		return config;
	},
};

module.exports = nextConfig;
