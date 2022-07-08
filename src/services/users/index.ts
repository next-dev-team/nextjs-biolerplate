import { fetcher } from '@root/src/utils/request';

export const usersServices = async () => {
	const res = await fetcher('/users');
	return res?.data;
};
