import { NextSeo, NextSeoProps } from 'next-seo';
import Box from '../box';
import SideMenu, { ISideMenu } from '../sideMenu';

export type IPageLayout = {
	children: ReactNode;
	isNoSEO?: boolean;
	seoProps?: NextSeoProps;
	sideMenuProps?: Partial<ISideMenu>;
	footerProps?: React.ComponentProps<typeof GFooter>;
	outerCls?: string;
	headerChildren?: ReactNode;
	contentCls?: string;
};

/**
 * PageLayout contain related to SEO and other configuration for page
 */
export default function PageLayout(props: IPageLayout) {
	const {
		children,
		isNoSEO,
		seoProps,
		sideMenuProps,
		outerCls,
		headerChildren,
		contentCls,
		footerProps,
	} = props;

	const isHasSideMenu = useMemo(
		() => sideMenuProps?.data?.length > 0,
		[sideMenuProps?.data]
	);

	return (
		<Box className={outerCls}>
			{/* --------- render head for SEO ----------*/}
			{!isNoSEO && (
				<NextSeo
					title={'page title'}
					description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
					{...seoProps}
				/>
			)}
			<GHeader>{headerChildren}</GHeader>
			{/* -------- because of header fixed need to set padding top to the same header height */}
			<Box
				className={_tw(
					'flex min-h-[60vh]',
					`pt_${
						headerChildren
							? _cons.contentPaddingTopFixed + _cons.contentWithSubFixed
							: _cons.contentPaddingTopFixed
					}`,
					contentCls
				)}
			>
				{/* -------- side menu show if sideMenuProps.data has value ----------- */}
				<Box hide={!isHasSideMenu} className="flex-none w-1/6">
					<SideMenu {...{ data: [], ...sideMenuProps }} />
				</Box>

				{/* ---------body content wrapper ----------*/}
				<Box typeBox="main" className="mx-auto bg-white dark:bg-gray-900">
					{/* --------- content/children|slot ----------*/}
					{children}

					{/* --------- footer size menu ----------*/}
					<GFooter hide={!isHasSideMenu} />
				</Box>
			</Box>

			{/* --------- footer outsize fixed side menu ----------*/}
			<GFooter hide={footerProps?.hide || isHasSideMenu} {...footerProps} />
		</Box>
	);
}
