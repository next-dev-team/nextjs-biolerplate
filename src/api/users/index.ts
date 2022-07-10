export const _usersApi = async () => {
	const res = await _axiosGet('/users');
	return res?.data;
};
