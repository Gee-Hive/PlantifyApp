/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import Routes from './src/routes';
import store from './src/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
