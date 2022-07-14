export const _useGithubSelector = () => {
	const blog = _useSelector(state => state);

	const actions = _useAction(dispatch => ({
		fetchBlog: dispatch.blog.fetchBlog,
		setBlog: dispatch.blog.setBlog,
		setSelectedComponentIframe: dispatch.blog.setSelectedComponentIframe,
	}));
	console.log('blog', blog);

	return {
		...actions,
		blog: blog.blog.blog,
		isBlogErr: blog.blog.isBlogErr,
		selectedComponentIframe: blog.blog.selectedComponentIframe,
		loadingFetchBlog: blog?.loading?.effects?.blog?.fetchBlog,
	};
};
