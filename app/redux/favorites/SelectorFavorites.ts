import type { StateType } from '../StoreRedux';

export const getFavorites = ({ favorites }: StateType) => favorites.titles;
