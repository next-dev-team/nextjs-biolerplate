import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useUpdateStore } from '../hooks/useUpdateStore';
import { usersServices } from '../services/users';
import { useUserSelector } from '../stores/userStore/userSelector';

const HomeTemplate = dynamic(() => import('../template/home'));

export default function HomePage(props: { userSsrData: [] }) {
	// after server get data will set to global store
	const { setUser } = useUserSelector();
	useUpdateStore({ setStoreFn: setUser, asyncData: props?.userSsrData });

	return <HomeTemplate />;
}

export const getStaticProps: GetStaticProps = async () => {
	//only some information related for SEO will fetching here
	const userSsrData = await usersServices();

	return {
		props: {
			userSsrData,
		},
	};
};
