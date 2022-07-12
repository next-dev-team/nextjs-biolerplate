/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useComponent } from './useComponents';

const ComponentsTemplate = () => {
	const { menuData } = useComponent();
	const { selectedMenu } = _useAppSelector();

	return (
		<GLayout
			{...{
				seoProps: { title: 'components', description: 'welcome' },
				sideMenuProps: {
					data: menuData,
				},
			}}
		>
			<iframe
				width="100%"
				height="100%"
				src={selectedMenu || menuData[0].children[0].iframeUrl}
			></iframe>
		</GLayout>
	);
};

export default ComponentsTemplate;
