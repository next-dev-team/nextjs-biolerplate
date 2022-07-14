import PostDetailTemplate from '@/template/posts';
import { GetStaticPaths } from 'next';

export default function Post(props: { post: BlogItemApi }) {
	return <PostDetailTemplate {...props} />;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const post = await _axios<{ data: BlogItemApi }>(`/blog/${params?.id}`);

	return {
		props: { post: post?.data?.data },
		notFound: !post?.data,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await _dispatch.blog.fetchBlog();
	return {
		paths: posts?.data?.map(item => ({
			params: { id: String(item?.id) },
		})),
		fallback: false,
	};
};
