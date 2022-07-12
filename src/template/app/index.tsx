import { DefaultSeo } from 'next-seo';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

import { useAppTemplate } from './useAppTemplate';

export default function AppTemplate(props: AppProps) {
	// after ssr finish fetching data will show loading
	const { Component, pageProps } = props || {};
	const { loading, router } = useAppTemplate(props);

	return (
		<div className="relative">
			{/* --------- AppLayout will be apply all related with layout and logic or init for entire app */}
			<DefaultSeo {..._configSEO} />
			<GAppLayout ssrLoading={loading}>
				<Component {...pageProps} key={router?.route} />
			</GAppLayout>
		</div>
	);
}
