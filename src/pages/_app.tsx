import '@/styles/global.scss';
import dynamic from 'next/dynamic';
import 'nprogress/nprogress.css';
import 'tailwindcss/tailwind.css';
// style import only support here

const AppTemplate = dynamic(() => import('@/template/app'));

export default function App(props: AppProps) {
	return <AppTemplate {...props} />;
}
