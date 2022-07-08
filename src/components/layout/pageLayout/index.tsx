import { NextSeo } from 'next-seo';
import { ReactNode } from 'react';

export type IPageLayout = {
	children: ReactNode;
	isHasSEO?: boolean;
};

/**
 * PageLayout contain related to SEO and other configuration for page
 */
export default function PageLayout(props: IPageLayout) {
	const { children, isHasSEO } = props;
	return (
		<>
			{/* --------- render head for SEO ----------*/}
			{isHasSEO && (
				<NextSeo
					title={'page title'}
					description="🦸‍♀️ A super template for Next.js with a pack of incredible tools"
				/>
			)}

			{/* --------- render content/children|slot ----------*/}
			{children}
		</>
	);
}
