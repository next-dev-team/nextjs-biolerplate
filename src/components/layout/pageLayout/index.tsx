import { NextSeo, NextSeoProps } from 'next-seo';
import Box from '../box';
import SideMenu, { ISideMenu } from '../sideMenu';

export type IPageLayout = {
	children: ReactNode;
	isNoSEO?: boolean;
	seoProps?: NextSeoProps;
	sideMenuProps?: Partial<ISideMenu>;
};

/**
 * PageLayout contain related to SEO and other configuration for page
 */
export default function PageLayout(props: IPageLayout) {
	const { children, isNoSEO, seoProps, sideMenuProps } = props;
	const isHasSideMenu = sideMenuProps?.data?.length > 0;
	return (
		<>
			{/* --------- render head for SEO ----------*/}
			{!isNoSEO && (
				<NextSeo
					title={'page title'}
					description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
					{...seoProps}
				/>
			)}

			{/* --------- render content/children|slot ----------*/}

			<Box className="flex min-h-screen">
				{/* -------- side menu show if sideMenuProps.data has value ----------- */}
				<Box hide={!isHasSideMenu} className="flex-none w-1/6">
					<SideMenu {...{ data: [], ...sideMenuProps }} />
				</Box>

				{/* ---------body content wrapper ----------*/}
				<main className="flex-1 min-w-0 overflow-auto">{children}</main>
			</Box>
		</>
	);
}
