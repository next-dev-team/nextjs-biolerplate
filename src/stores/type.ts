import type { RematchDispatch, RematchRootState, RematchStore } from '@rematch/core';
import type { ExtraModelsFromLoading } from '@rematch/loading';
import type { ExtraModelsFromUpdated } from '@rematch/updated';
import type { RootModel } from './model';

export type FullModel = ExtraModelsFromLoading<RootModel> &
	ExtraModelsFromUpdated<RootModel>;
export type Store = RematchStore<RootModel, FullModel>;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
export type RootStateKey = keyof typeof models;

export type RootStateRecord = Record<keyof typeof models, any>;
export type InitialStoreState = Partial<Record<RootStateKey, any>>;
