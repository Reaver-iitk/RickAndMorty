import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const sliceName = 'favorites';

interface Favorites {
  titles: string[];
}

const initialState: Favorites = {
  titles: [],
};

export const fetchTitles = createAsyncThunk(
  `${sliceName}/fetchTitles`,
  (titles: string[]) => {
    return titles;
  },
);

const slice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    add(state, action: PayloadAction<{ title: string }>) {
      const { title } = action.payload;
      state.titles.push(title);
    },
    remove(state, action: PayloadAction<{ title: string }>) {
      const { title } = action.payload;
      const newTitles = state.titles.filter((titles) => {
        return (titles !== title)
      });

      state.titles = newTitles;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      fetchTitles.fulfilled,
      (state, { payload: characterTitle }) => {
        state.titles = characterTitle;
      },
    );
  },
});

export const {
  reducer: favoritesReducer,
  actions: { add, remove },
} = slice;
