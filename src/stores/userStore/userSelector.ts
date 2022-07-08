import useUserStore from './';

export const useUserSelector = () => {
	const { users, setUser } = useUserStore();
	return {
		users,
		setUser,
	};
};
