export type IUserCard = {
	imgCover: string;
	title: string;
	desc: string;
	nextLink: any;
	loading?: boolean;
};

const UserCard = ({ imgCover, title, desc, nextLink, loading }: IUserCard) => {
	return (
		<Link href={nextLink}>
			<a className="relative block overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:opacity-80">
				<GInnerLoading hide={!loading} />
				<img className="object-cover aspect-video" src={imgCover} alt="" />

				<div className="p-6">
					<h5 className="text-xl font-bold">{title}</h5>

					<p className="mt-2 text-sm text-gray-500 line-clamp-4">{desc}</p>

					<div className="inline-block pb-1 mt-4 font-medium text-blue-600 border-b border-blue-500 ">
						Read more
						<span aria-hidden="true"> &rarr;</span>
					</div>
				</div>
			</a>
		</Link>
	);
};

export default UserCard;
