import { RootStateRecord } from '@/stores/type';
import type { GetStaticPropsResult } from 'next';

export type NextProps = {
	initialStoreState?: RootStateRecord;
} & Record<string, any>;

export type NextStaticResults = Promise<GetStaticPropsResult<NextProps>>;
