import * as React from 'react';
import { CharactersInfo } from '../screens/character';
import TabsNavigation from './TabsNavigation';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { CharacterParamList } from './types';
import { useDispatch, useSelector } from '../redux/StoreRedux';
import { useEffect } from 'react';
import { fetchCharacters } from '../redux/characters/SlicesCharacters';
import { loadingStatusSelector } from '../redux/characters/SelectorCharacters';
import { LoadingScreen } from '../screens/loadingScreen';

const CharactersNavigation = () => {
  const Stack = createNativeStackNavigator<CharacterParamList>();

  const loading = useSelector(loadingStatusSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters({}));
  }, []);

  if (loading) return <LoadingScreen />;

  const screenOption: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    title: 'Персонаж',
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CharacterList"
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CharacterInfo"
        component={CharactersInfo}
        options={screenOption}
      />
    </Stack.Navigator>
  );
};

export default CharactersNavigation;
