import { NextStaticResults } from '@/types/custom-type';
import dynamic from 'next/dynamic';

const HomeTemplate = dynamic(() => import('../template/home'));
export default HomeTemplate;

export const getStaticProps: GetStaticProps = async (): NextStaticResults => {
	//only some information related for SEO will fetching here
	const allHomeData = await _dispatch.blog.fetchBlog();

	return {
		props: {
			initialStoreState: {
				blog: {
					blog: allHomeData.data,
				},
			},
		},
	};
};
