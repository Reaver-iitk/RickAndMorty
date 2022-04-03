import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CharactersNavigation from './navigation/CharactersNavigation';
import {ApolloProvider} from '@apollo/client';
import {client} from '../app/services/ApolloClient';

function App() {
  return (
    <NavigationContainer>
      <CharactersNavigation />
    </NavigationContainer>
  );
}

export default App;
