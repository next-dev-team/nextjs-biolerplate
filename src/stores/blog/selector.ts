export const _useGithubSelector = () => {
	const blog = _useSelector(state => state);

	const actions = _useAction(dispatch => ({
		fetchBlog: dispatch.blog.fetchBlog,
		setBlog: dispatch.blog.setBlog,
	}));

	console.log('sila', blog);

	return {
		...actions,
		blog: blog.blog.blog,
		loadingFetchBlog: blog?.loading?.effects?.blog?.fetchBlog,
	};
};
