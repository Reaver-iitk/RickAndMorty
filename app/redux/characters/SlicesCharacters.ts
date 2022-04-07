import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Characters,
  CharactersRequest,
  CharactersResponse,
} from '../../screens/characterList/types/Characters';
import { getCharacters } from '../../screens/characterList/services/GetCharacter';

const sliceName = 'characters';

export interface CharactersState {
  loading: boolean;
  error: unknown;
  characters: Characters[];
}

const initialState: CharactersState = {
  loading: false,
  error: null,
  characters: [],
};

export const fetchCharacters = createAsyncThunk<
  CharactersResponse,
  CharactersRequest
>(`${sliceName}/fetchCharacters`, async () => {
  const charactersData = await getCharacters();

  return charactersData;
});

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCharacters.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, { payload: charactersData }) => {
          state.loading = false;

          const { results } = charactersData;
          state.characters = results;
        },
      )
      .addCase(fetchCharacters.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error;
      });
  },
});

export const { reducer: charactersReducer } = slice;

export default slice;
