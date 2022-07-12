import { ISideMenu } from '@/components/layout/sideMenu';

export const useComponent = () => {
	const menuData: ISideMenu['data'] = [
		{
			title: 'Footer',
			path: '#footer',
			children: [
				{
					title: 'Footer1',
					path: '#Footer1',
					iframeUrl: 'https://www.hyperui.dev/components/marketing/footers',
				},
				{
					title: 'Footer2',
					path: '#Footer2',
					iframeUrl: 'https://tailus.io/blocks/footer',
				},
				{
					title: 'Footer3',
					path: '#Footer3',
					iframeUrl: 'https://wickedblocks.dev/groups/footer/',
				},
				{
					title: 'Footer4',
					path: '#Footer4',
					iframeUrl: 'https://mambaui.com/components/footer',
				},
			],
		},
	];

	return { menuData };
};
