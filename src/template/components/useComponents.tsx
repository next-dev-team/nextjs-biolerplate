import { ISideMenu } from '@/components/layout/sideMenu';

export const useComponent = () => {
	const menuData: ISideMenu['data'] = [
		{
			title: 'Cards1',
			path: '#card1',
		},
		{
			title: 'Cards2',
			path: '#card2',
			children: [
				{
					title: 's card 1',
					path: '#s1',
				},
				{
					title: 's card 2',
					path: '#s2',
				},
			],
		},
	];

	return { menuData };
};
