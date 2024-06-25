import { atomWithStorage } from 'jotai/utils';

// Atoms
export const filterCityAtom = atomWithStorage('filter-city', '');
export const filterTypeAtom = atomWithStorage('filter-type', '');
