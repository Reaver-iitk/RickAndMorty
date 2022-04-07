import { RouteProp, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { CharacterParamList } from '../../navigation/types';
import { add } from '../../redux/favorites/SlicesFavorite';
import { useDispatch } from '../../redux/StoreRedux';
import FavoriteIcon from '../../res/favoriteIcon';
import { getCharacter } from './rest/RestCharacters';

const CharactersInfo = () => {
  const { params } = useRoute<RouteProp<CharacterParamList, 'CharacterInfo'>>();

  const [character, setCharacter] = useState(Object);

  const dispatch = useDispatch();

  const { id: characterId } = params;

  getCharacter(characterId).then(response => {
    setCharacter(response);
  });

  var title = character.name;

  const addFavorite = () => {
    dispatch(add({ title }));
  };

  return (
    <View style={styles.body}>
      <FastImage style={styles.image} source={{ uri: character.image }} />
      <View style={styles.body}>
        <Text style={styles.text}>Имя: {character.name}</Text>
        <Text style={styles.text}>Статус: {character.status}</Text>
        <Text style={styles.text}>Пол: {character.gender}</Text>
        <Text style={styles.text}>
          Место рождения: {Object(character.origin).name}
        </Text>
        <Text style={styles.text}>
          Место проживания: {Object(character.location).name}
        </Text>
        <TouchableOpacity onPress={addFavorite}>
          <FavoriteIcon color="#fff" isFavorite={false} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CharactersInfo };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 40,
  },
  text: {
    fontSize: 14,
    opacity: 0.5,
  },
});
