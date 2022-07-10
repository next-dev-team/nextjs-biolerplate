interface State {
	users: IUserApi.Users;
	setUser: (userData: any, loading?: boolean) => any;
}

export const _useUserStore = _createStore<State>((set, get) => ({
	users: [],
	setUser: (users: any[]) => set({ users }),
	clearUser: (users = []) => set({ users }),
}));
