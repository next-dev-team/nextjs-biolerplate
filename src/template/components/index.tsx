/**
 * render only UI the logic state should be in useHomeLogic
 */

import { useComponent } from './useComponents';

const ComponentsTemplate = () => {
	const { menuData, loading } = useComponent();
	const { selectedMenu } = _useAppSelector();

	return (
		<GLayout
			{...{
				seoProps: { title: 'components', description: 'welcome' },
				sideMenuProps: {
					data: menuData,
				},
				contentCls: 'min-h-screen overflow-hidden',
			}}
		>
			<Box className="relative w-[95vw] h-screen">
				<GInnerLoading hide={!loading} />
				<GIframe url={selectedMenu || menuData[0].children[0].iframeUrl} />
			</Box>
		</GLayout>
	);
};

export default ComponentsTemplate;
