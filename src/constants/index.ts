import { constLayout } from './layout';

/**
 * @example
 * _cons.x
 */
export const _cons = {
	...constLayout,
	...envCons,

	// other constant goes here
};

// env
export const _envCons = envCons;
