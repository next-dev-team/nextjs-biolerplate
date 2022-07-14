interface BlogItemApi {
	id: number;
	status: string;
	sort?: any;
	user_created: string;
	date_created: string;
	user_updated: string;
	date_updated: string;
	title: string;
	description?: any;
	photo: string;
	shortDesc: string;
	iframeUrl: string;
}
type BlogDataApi = BlogItemApi[];

type BlogState = {
	blog: BlogDataApi;
};
