import { twMerge } from 'tailwind-merge';

/**
 * @example
 *   twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]')
 * //OUTPUT: → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
 */
export const tw: typeof twMerge = (...classLists: (string | false)[]) =>
	twMerge(...classLists);
