import { useUserSelector } from '@root/src/stores/userStore/userSelector';
/**
 * all related logic for homepage here
 */
export const useHomeLogic = () => {
	const { setUser, users } = useUserSelector();
	return { setUser, users };
};
