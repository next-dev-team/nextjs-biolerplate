import { _useUserSelector } from '@/stores/userStore';
import dynamic from 'next/dynamic';

const HomeTemplate = dynamic(() => import('../template/home'));

export default function HomePage(props: { userSsrData: [] }) {
	// after server get data will set to global store
	const { setUser } = _useUserSelector();
	_useUpdateStoreEff({ setStoreFn: setUser, asyncData: props?.userSsrData });

	return <HomeTemplate />;
}

export const getStaticProps: GetStaticProps = async () => {
	//only some information related for SEO will fetching here
	const userSsrData = await _usersApi();

	return {
		props: {
			userSsrData,
		},
	};
};
