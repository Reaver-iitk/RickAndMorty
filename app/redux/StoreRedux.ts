import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useDispatchUses,
  useSelector as useSelectorUses,
} from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { charactersReducer } from './characters/SlicesCharacters';
import { favoritesReducer } from './favorites/SlicesFavorite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const reducer = combineReducers({
  characters: charactersReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const Persistor = persistStore(Store)

export type DispatchType = typeof Store.dispatch;
export type StateType = ReturnType<typeof Store.getState>;

export const useDispatch = () => useDispatchUses<DispatchType>();
export const useSelector: TypedUseSelectorHook<StateType> = useSelectorUses;
