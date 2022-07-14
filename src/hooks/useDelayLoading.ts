export const _useDelayLoading = (initLoading = false, duration = 300) => {
	const [loading, setLoading] = useState(true);

	const updateLoading = async () => {
		await _sleepAsync(duration);
		if (!initLoading) {
			setLoading(false);
		}
	};

	useEffect(() => {
		updateLoading();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initLoading]);

	return { loading };
};
