import { _configSEO } from '@/utils/library';
import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps, router }: AppProps) {
	const [loading, setLoading] = useState(false);
	//Binding events.
	router.events?.on('routeChangeStart', () => NProgress.start());
	router.events?.on('routeChangeComplete', () => NProgress.done());
	router.events?.on('routeChangeError', () => NProgress.done());

	// after ssr finish fetching data will show loading
	useEffect(() => {
		setLoading(true);
		if (router?.isReady) {
			//delay for smooth loading
			_sleepAsync(0).then(() => {
				setLoading(false);
			});
		} else {
			setLoading(false);
		}
	}, [router?.isReady]);

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
