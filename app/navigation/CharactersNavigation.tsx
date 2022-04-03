import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharacterInfo from '../screens/Character/components/CharacterInfo';
import TabsNavigation from './TabsNavigation';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {CharacterParamList} from './types';

const Stack = createStackNavigator();

const CharactersNavigation = (): JSX.Element => {
  const {Navigator, Screen} = createNativeStackNavigator<CharacterParamList>();

  const screenOption: NativeStackNavigationOptions = {
    headerBackTitleVisible: false,
    title: 'Персонаж',
  };

  return (
    <Navigator>
      <Screen
        name="CharacterList"
        component={TabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CharacterInfo"
        component={CharacterInfo}
        options={screenOption}
      />
    </Navigator>
  );
};

export default CharactersNavigation;
