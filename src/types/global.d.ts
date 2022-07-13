import type { GetStaticProps as _GetStaticProps } from 'next';
import type { AppProps as _AppProps } from 'next/app';
import type {
	CSSProperties as _CSSProperties,
	DependencyList as _DependencyList,
	ReactNode as _ReactNode,
} from 'react';

declare global {
	// react
	declare type ReactNode = _ReactNode;
	declare type CSSProperties = _CSSProperties;
	declare type DependencyList = _DependencyList;
	//next
	declare type GetStaticProps = _GetStaticProps;

	declare type AppProps<P = {}> = Omit<_AppProps<P>, 'pageProps'> & {
		pageProps: {
			initialStoreState: Record<string, any>;
		} & Record<string, any>;
	};
	declare type BoxElProps = React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
}
