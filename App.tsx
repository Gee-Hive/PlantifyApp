/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

import OnBoarding from './src/screens/auth/OnBoarding';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from './src/screens/auth/Signin';
import Siginup from './src/screens/auth/Siginup';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Signup" component={Siginup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
