import { NextSeo, NextSeoProps } from 'next-seo';

export type IPageLayout = {
	children: ReactNode;
	isHasSEO?: boolean;
	seoProps?: NextSeoProps;
};

/**
 * PageLayout contain related to SEO and other configuration for page
 */
export default function PageLayout(props: IPageLayout) {
	const { children, isHasSEO, seoProps } = props;
	return (
		<>
			{/* --------- render head for SEO ----------*/}
			{isHasSEO && (
				<NextSeo
					title={'page title'}
					description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
					{...seoProps}
				/>
			)}

			{/* --------- render content/children|slot ----------*/}
			{children}
		</>
	);
}
