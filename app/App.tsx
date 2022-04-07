import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CharactersNavigation from './navigation/CharactersNavigation';
import { ApolloProvider } from '@apollo/client';
import { Client } from '../app/services/ApolloClient';
import { Provider } from 'react-redux';
import { Store, Persistor } from './redux/StoreRedux';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <ApolloProvider client={Client}>
          <NavigationContainer>
            <CharactersNavigation />
          </NavigationContainer>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
