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
import {Image, StyleSheet} from 'react-native';
// import DrawContent from './components/DrawerContent';
import DrawerContent from './components/DrawerContent';
import {setUser} from './store/user';
import {useDispatch, useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  console.log('user :>> ', user);
  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user));
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

  const Tabs = () => (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('./assets/Home-active.png')
                  : require('./assets/Home-inactive.png')
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={styles.icon}
              source={
                focused
                  ? require('./assets/Calendar-active.png')
                  : require('./assets/Calendar-inactive.png')
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );

  if (user) {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="AddTasks" component={AddTasks} />
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

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
export default React.memo(Routes);
