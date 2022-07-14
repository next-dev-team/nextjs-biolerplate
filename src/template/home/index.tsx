/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useHomeLogic } from './useHomeLogic';
import UserSection from './userSection';

const HomeTemplate = () => {
	const { fetchBlog, setBlog, loadingFetchBlog } = useHomeLogic();

	return (
		<GLayout seoProps={{ title: 'NextJs', description: 'welcome' }}>
			{/* ---------- UserSection ---------  */}
			<UserSection />
		</GLayout>
	);
};

export default HomeTemplate;
