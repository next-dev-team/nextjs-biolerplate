import { Models } from '@rematch/core';
import { blog } from './blog';
import { InitialStoreState } from './type';

export interface RootModel extends Models<RootModel> {
	blog: typeof blog;
	// other store model goes here
}

export const models: RootModel = {
	blog,
	// other model goes here
};

export const initialStoreState: InitialStoreState = {};
