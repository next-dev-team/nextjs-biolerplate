/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useComponent } from './useComponents';

const ComponentsTemplate = () => {
	const { menuData } = useComponent();
	return (
		<GLayout
			{...{
				seoProps: { title: 'components', description: 'welcome' },
				sideMenuProps: {
					data: menuData,
				},
			}}
		>
			<h1>{_useRouter().pathname}</h1>
		</GLayout>
	);
};

export default ComponentsTemplate;
