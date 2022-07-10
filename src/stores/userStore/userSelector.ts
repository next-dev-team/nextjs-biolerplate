import { _useUserStore } from './userStore';

export const _useUserSelector = () => {
	const { users, setUser } = _useUserStore();
	return {
		users,
		setUser,
	};
};
