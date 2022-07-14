import { _createModel } from '@/utils/library';
import type { RootModel } from '../model';

export const blog = _createModel<RootModel>()({
	state: {
		blog: [],
		selectedComponentIframe: '',
		isBlogErr: false,
	} as BlogState,
	reducers: {
		setIsBlogErr: (state, payload: BlogState['isBlogErr']) => {
			return { ...state, isBlogErr: payload };
		},
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
			if (res?.data) {
				dispatch.blog.setBlog(res?.data?.data ?? []);
			} else {
				dispatch.blog.setIsBlogErr(true);
			}
			return res?.data;
		},
	}),
});
