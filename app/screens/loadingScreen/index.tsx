import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  );
};

export { LoadingScreen };

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
