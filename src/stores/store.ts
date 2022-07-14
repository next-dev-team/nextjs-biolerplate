import { init } from '@rematch/core';
import immerPlugin from '@rematch/immer';
import loading from '@rematch/loading';
// import updated from '@rematch/updated';
// import storage from 'redux-persist/lib/storage';
import { initialStoreState, models, RootModel } from './model';
import { FullModel, Store } from './type';

// const persistConfig: PersistConfig<any> = {
// 	key: 'root',
// 	storage,
// 	whitelist: [],
// };

let store: Store;
export const initStore = (initialState = initialStoreState) =>
	init<RootModel, FullModel>({
		models,
		redux: {
			initialState,
		},
		plugins: [
			// updated(),
			loading(),
			immerPlugin({
				whitelist: [''],
			}),
			// persistPlugin(persistConfig),
		],
	});

export const _initializeStore = (preloadedState?: any) => {
	let _store = store ?? initStore(preloadedState);

	// After navigating to a page with an initial Redux state, merge that state
	// with the current state in the store, and create a new store
	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		});
		// Reset the current store
		store = undefined;
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	return _store;
};
