export const _useGithubSelector = () => {
	const dolphins = _useSelector(state => state.dolphins);

	const { incrementAsync } = _useAction(dispatch => ({
		incrementAsync: dispatch.dolphins.incrementAsync,
	}));

	console.log('dolphins', dolphins);

	return { dolphins, incrementAsync };
};
