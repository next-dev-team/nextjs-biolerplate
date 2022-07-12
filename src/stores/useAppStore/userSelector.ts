import { _useAppStore } from './useAppStore';

export const _useAppSelector = () => {
	const { setActiveSideCls, activeSideMenuCls } = _useAppStore();
	return {
		setActiveSideCls,
		activeSideMenuCls,
	};
};
