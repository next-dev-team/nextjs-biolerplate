import UserSection from './userSection';

/**
 * render only UI the logic state should be in useHomeLogic
 */

const HomeTemplate = () => {
	return (
		<GLayout seoProps={{ title: 'NextJs', description: 'welcome' }}>
			{/* ---------- UserSection ---------  */}
			<UserSection />
			{/* ---------- Other Section goes here ---------  */}
		</GLayout>
	);
};

export default HomeTemplate;
