type UsersItem = {
	id: number;
	name: string;
	email: string;
	gender: string;
	status: string;
};

declare namespace IUserApi {
	type Users = UsersItem[];
}
