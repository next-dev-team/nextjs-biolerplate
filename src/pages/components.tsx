import dynamic from 'next/dynamic';

const ComponentsPage = dynamic(() => import('../template/components'));
export default ComponentsPage;
