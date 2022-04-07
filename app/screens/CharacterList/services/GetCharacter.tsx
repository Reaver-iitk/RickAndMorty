import { query } from '../../../services/ApolloClient';
import { GET_CHARACTERS } from './query/CharacterListQuery';
import { CharactersResponse } from '../types/Characters';

export const getCharacters = async (): Promise<CharactersResponse> => {
  const {
    data: { characters },
  } = await query({
    query: GET_CHARACTERS,
  });

  return characters;
};
