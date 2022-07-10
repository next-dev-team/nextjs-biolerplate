type ISetAsyncFn = {
	setStoreFn: (p?: any, loading?: boolean) => void;
	asyncData: any;
	dep1?: DependencyList[0];
	isDebug?: boolean;
	/**
	 * delay loading (ms)
	 */
	delayLoading?: number;
	noLoading?: boolean;
};
/**
 * custom client set data to store this not re-fetch from api just get trigger data from next srr
 */
export const _useUpdateStoreEff = ({
	setStoreFn,
	asyncData,
	dep1,
	isDebug,
	delayLoading = 0,
	noLoading,
}: ISetAsyncFn) => {
	const delayRef = useRef(!noLoading);

	useEffect(() => {
		const debugFn = (name?: string) => {
			if (isDebug) {
				console.log(`====> ${name || setStoreFn?.name}: `, {
					asyncData,
					loading: delayRef.current,
				});
			}
		};

		if (!setStoreFn) {
			debugFn('invalid call');
			return;
		}

		if (noLoading) {
			setStoreFn?.(asyncData);
			debugFn('without loading');
			return;
		}
		debugFn('first render');
		if (delayLoading) {
			setStoreFn?.(asyncData, delayRef.current);

			_sleepAsync(delayLoading).then(() => {
				delayRef.current = false;
				setStoreFn?.(asyncData, delayRef.current);
				debugFn(`finished after delay ${delayLoading}ms`);
			});
		} else {
			delayRef.current = false;
			setStoreFn?.(asyncData, delayRef.current);
			debugFn('finished call');
		}
	}, [asyncData, setStoreFn, noLoading, delayLoading, isDebug, dep1]);
};
