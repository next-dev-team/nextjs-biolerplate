import NProgress from 'nprogress';
export const useAppTemplate = (props: AppProps) => {
	const { router } = props || {};

	const [loading, setLoading] = useState(false);
	//Binding events.
	router.events?.on('routeChangeStart', () => NProgress.start());
	router.events?.on('routeChangeComplete', () => NProgress.done());
	router.events?.on('routeChangeError', () => NProgress.done());

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

	return {
		loading,
		router,
	};
};
