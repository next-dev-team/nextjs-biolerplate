import { Models } from '@rematch/core';
import { dolphins } from './github';
import { InitialStoreState } from './type';

export interface RootModel extends Models<RootModel> {
	dolphins: typeof dolphins;
	// other store model goes here
}

export const models: RootModel = {
	dolphins,
	// other model goes here
};

export const initialStoreState: InitialStoreState = {};
