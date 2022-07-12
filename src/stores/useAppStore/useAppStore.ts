interface State {
	setActiveSideCls: (p?: boolean) => any;
	activeSideMenuCls: boolean;
}

export const _useAppStore = _createStore<State>((set, get) => ({
	activeSideMenuCls: true,
	setActiveSideCls: p => {
		set({ activeSideMenuCls: p });
	},
}));
