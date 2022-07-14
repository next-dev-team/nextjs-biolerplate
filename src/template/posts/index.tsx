export type IPostDetailTemplate = {
	post: BlogItemApi;
};

const PostDetailTemplate = ({ post }: IPostDetailTemplate) => {
	const router = _useRouter();

	return (
		<GLayout
			{...{
				seoProps: { title: 'components', description: 'welcome' },
				outerCls: 'overflow-hidden',
				footerProps: { hide: true }, // hide footer fot post page
				headerChildren: (
					<Box className="flex items-center w-full gap-2 py-2 bg-white">
						<GBackButton href={'/'} />
						<h1 className="px-6 font-medium text-white bg-gradient-to-r from-purple-500 via-green-500 to-red-500 hover:underline">
							{post?.title}
						</h1>
					</Box>
				),
			}}
		>
			<Box className="relative w-screen h-screen">
				<GInnerLoading hide={!router.isFallback} />
				<GIframe url={post?.iframeUrl} />
			</Box>
		</GLayout>
	);
};

export default PostDetailTemplate;
