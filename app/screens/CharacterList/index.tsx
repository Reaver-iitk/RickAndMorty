import { NavigationProp, useNavigation } from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { CharacterParamList } from '../../navigation/types';
import { charactersListSelector } from '../../redux/characters/SelectorCharacters';
import { useDispatch, useSelector } from '../../redux/StoreRedux';
import FavoriteIcon from '../../res/favoriteIcon';
import { Characters } from './types/Characters';
import { add } from '../../redux/favorites/SlicesFavorite';

const CharactersList = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<NavigationProp<CharacterParamList>>();

  const charactersList = useSelector(charactersListSelector);

  const Item = ({ id, title, image, alive }) => {
    const navigateToCharacter = () => {
      navigation.navigate('CharacterInfo', { id });
    };
    const addFavorite = () => {
      dispatch(add({ title }));
    };
    return (
      <TouchableOpacity onPress={navigateToCharacter}>
        <View style={styles.listItem}>
          <FastImage style={styles.image} source={{ uri: image }} />
          <View style={styles.body}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.alive}>{alive}</Text>
          </View>
          <TouchableOpacity onPress={addFavorite}>
            <FavoriteIcon color="#fff" isFavorite={false} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }: ListRenderItemInfo<Characters>) => (
    <Item
      id={item.id}
      title={item.name}
      image={item.image}
      alive={item.status}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={charactersList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export { CharactersList };

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
    height: 60,
    width: 60,
    borderRadius: 40,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  alive: {
    fontSize: 14,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});
