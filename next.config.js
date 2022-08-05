// const isProduction = process.env.NODE_ENV === 'production';
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});
const IconsResolver = require('unplugin-icons/resolver');

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['avatars.githubusercontent.com'],
	},

	webpack(config) {
		const autoImport = require('unplugin-auto-import/webpack')({
			dts: './auto-import.d.ts',
			include: [
				/\.[t]sx?$/, // .ts, .tsx,
			],
			imports: [
				'react',
				'ahooks',
				{ lodash: ['cloneDeep', 'camelCase', 'omit', 'pick'] },
			],
			vueTemplate: false,

			// Auto import for all module exports under directories
			// when using in file names mostly use prefixes _ and $ to avoid conflicts
			dirs: [
				'./src/hooks',
				'./src/utils',
				'./src/stores',
				'./src/api',
				'./src/services',
				'./src/components/**',
				'./src/constants',
				// './composables/**', // all nested modules
			],
			resolvers: [
				IconsResolver({
					componentPrefix: 'Icon',
				}),
			],
		});
		config.plugins.push(autoImport);

		config.plugins.push(
			require('unplugin-icons/webpack')({
				compiler: 'jsx',
				jsx: 'react',
			})
		);
		return config;
	},
};

module.exports = withBundleAnalyzer(nextConfig);
