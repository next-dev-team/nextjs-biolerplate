export const _renderActiveSideMenu = (
	p?: string,
	asPath?: string,
	menuKey?: number | string
) => {
	const isActiveRoute = asPath?.includes(p);

	const initActive = menuKey === 0 && !isActiveRoute;

	const a = isActiveRoute || initActive ? 'bg-gray-100' : '';
	return a;
};
