/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
	type: 'website',
	titleTemplate: '%s | nextjs-boilerplate',
	defaultTitle: 'nextjs-boilerplate',
	description: '🦸‍♀️ A super template for Next.js with a pack of incredible tools',
	canonical: 'https://nextjs-boilerplate.vercel.app',
	site_name: 'nextjs-boilerplate',
	openGraph: {
		url: 'https://nextjs-boilerplate.vercel.app',
		title: 'nextjs-boilerplate',
		description: '🦸‍♀️ A super template for Next.js with a pack of incredible tools',
		images: [
			{
				url: 'https://nextjs-boilerplate.vercel.app/static/images/banner.jpg',
				width: 512,
				height: 256,
				alt: 'nextjs-boilerplate Banner Image',
			},
		],
		site_name: 'nextjs-boilerplate',
	},
};

export default defaultSEOConfig;
