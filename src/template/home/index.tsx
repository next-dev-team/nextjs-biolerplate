/**
 * render only UI the logic state should be in useHomeLogic
 */

const HomeTemplate = () => {
	// const { fetchBlog, setBlog, loadingFetchBlog } = useHomeLogic();

	return (
		<GLayout seoProps={{ title: 'NextJs', description: 'welcome' }}>
			{/* ---------- UserSection ---------  */}
			<button className="flex gap-4 p-8 bg-gray-300 rounded-full w-80">
				<IconRiAppStoreFill className="w-10 h-10 text-orange-700" />
				<IconBiBagX className="w-10 h-10 text-orange-700" />
				<IconNotoLoveLetter className="w-10 h-10" />
			</button>
		</GLayout>
	);
};

export default HomeTemplate;
