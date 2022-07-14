import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { _initializeStore } from './store';
import { Dispatch, InitialStoreState, RootState } from './type';

export function _useStore(initialState: InitialStoreState) {
	const store = useMemo(() => _initializeStore(initialState), [initialState]);
	return store;
}

export const _store = _initializeStore();
export const _state = _initializeStore().getState();
export const _dispatch = _store?.dispatch;
export const _useDispatch = () => useDispatch<Dispatch>();
export const _useSelector: TypedUseSelectorHook<RootState> = useSelector;

export function _useAction<MD>(selector: (dispatch: Dispatch) => MD) {
	const dispatch = _useDispatch();
	return selector(dispatch);
}
