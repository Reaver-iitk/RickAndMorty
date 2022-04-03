import {RouteProp, useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {CharacterParamList} from '../../../navigation/types';

export default function CharactersInfo() {
  const {params} = useRoute<RouteProp<CharacterParamList, 'CharacterInfo'>>();
  const {id: characterId} = params;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Персонаж с ID: {characterId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});
