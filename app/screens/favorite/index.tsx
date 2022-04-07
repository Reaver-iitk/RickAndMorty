import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from '../../redux/StoreRedux';
import Config from 'react-native-config';
import { getFavorites } from '../../redux/favorites/SelectorFavorites';
import FavoriteIcon from '../../res/favoriteIcon';
import { remove } from '../../redux/favorites/SlicesFavorite';

const FavoritesList = () => {
  const allFavorites = useSelector(getFavorites);

  const dispatch = useDispatch();

  const removeFavorite = title => {
    dispatch(remove({ title }));
    console.log(title);
  };

  const Item = ({ title }) => (
    <View style={styles.listItem}>
      <View style={styles.body}>
        <Text style={styles.name}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFavorite(title)}>
        <FavoriteIcon color="#fff" isFavorite={true} />
      </TouchableOpacity>
    </View>
  );

  var renderItem = ({ item }) => <Item title={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={allFavorites}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export { FavoritesList };

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
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});
