import { useHomeLogic } from '../useHomeLogic';

/**
 * render only UI the logic state should be in useHomeLogic
 */
const UserSection = () => {
	const { users } = useHomeLogic();
	return (
		<>
			{users?.length > 0 ? (
				users.map((i, key) => {
					return <h1 key={key}>{i.name}</h1>;
				})
			) : (
				<h1>There is no data</h1>
			)}
		</>
	);
};

export default UserSection;
