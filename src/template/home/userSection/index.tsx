import { useHomeLogic } from '../useHomeLogic';

/**
 * render only UI the logic state should be in useHomeLogic
 */
const UserSection = () => {
	const { users = [] } = useHomeLogic();

	/**
	 * render user list
	 */
	const renderUser = useMemo(() => {
		const noData = <h1>There is no data</h1>;
		const userCard = users.map(userItem => {
			const { name, email } = userItem || {};
			return <GUserCard key={userItem?.name} {...{ position: email, title: name }} />;
		});

		return users.length < 1 ? noData : userCard;
	}, [users]);

	return (
		<>
			<section className="container px-6 py-10">
				{/* ------- render section title ----------- */}
				<h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
					Our Executive Team
				</h1>
				<p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex
					placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi
					optio eos harum.
				</p>
				<div className="grid grid-cols-1 gap-8 p-4 mt-8 border border-gray-100 rounded xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
					{renderUser}
				</div>
			</section>
		</>
	);
};

export default UserSection;
