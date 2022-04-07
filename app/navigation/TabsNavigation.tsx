import React from 'react';
import { CharactersList } from '../screens/characterList/';
import { FavoritesList } from '../screens/favorite/';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Characters'} component={CharactersList} />
      <Tab.Screen name={'Favorite'} component={FavoritesList} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
