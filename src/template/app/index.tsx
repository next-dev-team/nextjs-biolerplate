import { DefaultSeo } from 'next-seo';
import 'nprogress/nprogress.css';
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';

import { useAppTemplate } from './useAppTemplate';

export default function AppTemplate(props: AppProps) {
	const { Component, pageProps } = props || {};
	const store = _useStore(pageProps?.initialStoreState);
	// after ssr finish fetching data will show loading
	const { loading, router } = useAppTemplate(props);

	console.log('AppTemplate', props);

	return (
		<Provider store={store}>
			<div className="relative">
				{/* --------- AppLayout will be apply all related with layout and logic or init for entire app */}
				<DefaultSeo {..._seoConfig} />
				<GAppLayout ssrLoading={loading}>
					<Component {...pageProps} key={router?.route} />
				</GAppLayout>
			</div>
		</Provider>
	);
}
