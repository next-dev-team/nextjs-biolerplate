export const _usersApi = async () => {
	const res = await _axios<IUserApi.Users>('/users');
	return res?.data;
};
