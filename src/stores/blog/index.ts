import type { RootModel } from '../model';

export const blog = _createModel<RootModel>()({
	state: {
		blog: [],
		selectedComponentIframe: '',
	} as BlogState,
	reducers: {
		setBlog: (state, payload: BlogState['blog'] = []) => {
			return { ...state, blog: payload };
		},
		setSelectedComponentIframe: (
			state,
			payload: BlogState['selectedComponentIframe']
		) => {
			return { ...state, selectedComponentIframe: payload };
		},
	},
	effects: dispatch => ({
		async fetchBlog() {
			const res = await _axios<{ data: BlogDataApi }>('/blog', { isDebug: true });
			dispatch.blog.setBlog(res?.data?.data);
			return res?.data;
		},
	}),
});
