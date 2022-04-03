import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CharacterParamList} from '../../../navigation/types';

interface OwnProps {
  id: string;
  name: string;
  image: string;
}

const DATA = [
  {
    id: '1',
    title: 'Shinobu Oshino',
    image: 'https://images2.alphacoders.com/886/886944.png',
    alive: 'Жива',
  },
  {
    id: '2',
    title: 'Homura Akemi',
    image:
      'https://pm1.narvii.com/7320/2c8ae7c6698477313c34bbf37a06fa6def445028r1-1039-1052v2_uhq.jpg',
    alive: 'Мертва',
  },
  {
    id: '3',
    title: 'Yuno Gasai',
    image:
      'https://pm1.narvii.com/7236/c900092d83cb5a4f593c7dd320d3d48891cd931br1-1280-720v2_uhq.jpg',
    alive: 'Мертва',
  },
];

export default function CharactersList() {
  const navigation = useNavigation<NavigationProp<CharacterParamList>>();
  const Item = ({id, title, image, alive}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('CharacterInfo', {id})}>
      <View style={styles.listItem}>
        <FastImage style={styles.image} source={{uri: image}} />
        <View style={styles.body}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.alive}>{alive}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  var renderItem = ({item}) => (
    <Item
      id={item.id}
      title={item.title}
      image={item.image}
      alive={item.alive}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

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
