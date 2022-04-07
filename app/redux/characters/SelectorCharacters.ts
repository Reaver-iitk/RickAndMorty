import type { StateType } from '../StoreRedux';

export const charactersListSelector = ({
  characters: { characters },
}: StateType) => characters;

export const loadingStatusSelector = ({ characters: { loading } }: StateType) =>
  loading;
