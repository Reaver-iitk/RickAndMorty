import React from 'react';
import CharactersList from '../screens/CharacterList/components/CharactersList';
import FavoritesList from '../screens/Favorite/components/FavoritesList';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const RootNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Characters'} component={CharactersList} />
      <Tab.Screen name={'Favorite'} component={FavoritesList} />
    </Tab.Navigator>
  );
};

export default RootNavigation;
