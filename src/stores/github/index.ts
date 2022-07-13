import type { RootModel } from '../model';

export const dolphins = _createModel<RootModel>()({
	state: 0,
	reducers: {
		increment: (state, payload: number = 1) => state + payload,
	},
	effects: dispatch => ({
		async incrementAsync() {
			await _sleepAsync(500);
			dispatch.dolphins.increment();
		},
	}),
});
