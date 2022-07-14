import { useHomeLogic } from '../useHomeLogic';

/**
 * render only UI the logic state should be in useHomeLogic
 */
const UserSection = () => {
	const { blog, loadingFetchBlog } = useHomeLogic();

	/**
	 * render user list
	 */
	const renderUser = useMemo(() => {
		const noData = <h1>There is no data</h1>;
		const userCard = blog.map(userItem => {
			const { photo, title, shortDesc, id } = userItem || {};
			return (
				<GUserCard
					key={userItem?.id}
					{...{
						imgCover: _cons.blogCmsAssetsUrl + photo,
						desc: shortDesc,
						title,
						nextLink: `/posts/${id}`,
					}}
				/>
			);
		});

		return blog.length < 1 ? noData : userCard;
	}, [blog]);

	return (
		<>
			<section className="container px-6 py-10">
				<div className="grid grid-cols-1 gap-8 p-4 rounded md:grid-cols-2 xl:grid-cols-4">
					{renderUser}
				</div>
			</section>
		</>
	);
};

export default UserSection;
