import create from 'zustand';

interface State {
	users: IUserApi.Users;
	setUser: (userData: any, loading?: boolean) => any;
}

export const _useUserStore = create<State>((set, get) => ({
	users: [],
	setUser: (users: any[]) => set({ users }),
	clearUser: (users = []) => set({ users }),
}));
