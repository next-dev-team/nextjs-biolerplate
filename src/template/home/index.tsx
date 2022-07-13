/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useHomeLogic } from './useHomeLogic';

const HomeTemplate = () => {
	const { dolphins, incrementAsync } = useHomeLogic();

	return (
		<GLayout seoProps={{ title: 'NextJs', description: 'welcome' }}>
			{/* ---------- UserSection ---------  */}
			{/* <UserSection /> */}
			{/* ---------- Other Section goes here ---------  */}
			<h1>dolphins: {dolphins}</h1>
			<button className="px-6 py-4 bg-blue-300" onClick={incrementAsync}>
				+
			</button>
		</GLayout>
	);
};

export default HomeTemplate;
