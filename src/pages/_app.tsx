import dynamic from 'next/dynamic';

const AppTemplate = dynamic(() => import('@/template/app'));

export default function App(props: AppProps) {
	return <AppTemplate {...props} />;
}
