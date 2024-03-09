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

function App(): React.JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };
  return (
    <NavigationContainer theme={theme}>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
