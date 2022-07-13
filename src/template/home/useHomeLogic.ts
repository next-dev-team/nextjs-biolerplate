import { _useGithubSelector } from '@/stores/github/selector';

/**
 * all related logic for homepage here
 */
export const useHomeLogic = () => {
	const { dolphins, incrementAsync } = _useGithubSelector();

	return { dolphins, incrementAsync };
};
