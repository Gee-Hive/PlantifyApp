import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
// import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Onboarding from './screens/auth/OnBoarding';
import Signin from './screens/auth/Signin';
import Signup from './screens/auth/Siginup';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTasks from './screens/app/AddTasks';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  console.log('user :>> ', user);
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  // if (user) {
  //   const logout = () => {
  //     auth()
  //       .signOut()
  //       .then(() => console.log('User signed out!'));
  //   };
  //   return (
  //     <>
  //       <Text style={{margin: 40}}>Welcome</Text>
  //       <Text onPress={logout} style={{margin: 40}}>
  //         Log out
  //       </Text>
  //     </>
  //   );
  // }

  const Tabs = () => (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
      <Tab.Screen name="AddTasks" component={AddTasks} />
    </Tab.Navigator>
  );

  if (user) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
