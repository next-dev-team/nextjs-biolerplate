import { _useAppStore } from './useAppStore';

export const _useAppSelector = () => {
	const { setActiveSideCls, activeSideMenuCls, setSelectedMenu, selectedMenu } =
		_useAppStore();
	return {
		setActiveSideCls,
		activeSideMenuCls,
		setSelectedMenu,
		selectedMenu,
	};
};
