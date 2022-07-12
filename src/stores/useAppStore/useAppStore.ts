interface State {
	setActiveSideCls: (p?: boolean) => void;
	activeSideMenuCls: boolean;
	selectedMenu?: string;
	setSelectedMenu: (p?: string) => void;
}

export const _useAppStore = _createStore<State>((set, get) => ({
	activeSideMenuCls: true,
	setActiveSideCls: activeSideMenuCls => set({ activeSideMenuCls }),
	setSelectedMenu: selectedMenu => set({ selectedMenu }),
}));
