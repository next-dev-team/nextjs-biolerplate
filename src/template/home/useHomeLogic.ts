import { _useGithubSelector } from '@/stores/blog/selector';

/**
 * all related logic for homepage here
 */
export const useHomeLogic = () => {
	const blogStore = _useGithubSelector();

	return { ...blogStore };
};
