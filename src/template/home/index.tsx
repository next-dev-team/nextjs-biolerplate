import { Layout } from '@root/src/components/layout';
import UserSection from './userSection';

/**
 * render only UI the logic state should be in useHomeLogic
 */

const HomeTemplate = () => {
	return (
		<Layout>
			{/* ---------- UserSection ---------  */}
			<UserSection />
			{/* ---------- Other Section goes here ---------  */}
		</Layout>
	);
};

export default HomeTemplate;
