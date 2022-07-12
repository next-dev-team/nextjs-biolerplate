export const _usersApi = async () => {
	const res = await _axiosGet<IUserApi.Users>('/users');
	return res?.data;
};
