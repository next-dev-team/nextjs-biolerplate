import { _axios } from '@/utils/request';
import type { RootModel } from '../model';

export const blog = _createModel<RootModel>()({
	state: {
		blog: [],
	} as BlogState,
	reducers: {
		setBlog: (state, payload: BlogState['blog'] = []) => {
			return { ...state, blog: payload };
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
