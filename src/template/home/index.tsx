/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useHomeLogic } from './useHomeLogic';
import UserSection from './userSection';

const HomeTemplate = () => {
	const { fetchBlog, setBlog, loadingFetchBlog } = useHomeLogic();

	return (
		<GLayout seoProps={{ title: 'NextJs', description: 'welcome' }}>
			<button
				className="px-6 py-4 bg-blue-300"
				onClick={() => {
					setBlog([]);
				}}
			>
				{loadingFetchBlog ? 'loading....' : 'clear blog'}
			</button>
			<button
				className="px-6 py-4 bg-blue-300"
				onClick={() => {
					fetchBlog();
				}}
			>
				{loadingFetchBlog ? 'loading....' : 'refresh blog'}
			</button>
			{/* ---------- UserSection ---------  */}
			<UserSection />
		</GLayout>
	);
};

export default HomeTemplate;
