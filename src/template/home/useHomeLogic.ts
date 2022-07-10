/**
 * all related logic for homepage here
 */
export const useHomeLogic = () => {
	const { setUser, users } = _useUserSelector();
	return { setUser, users };
};
