import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Linking, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../constants/colors';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../constants/links';

function DrawerContent(props) {
  const {navigation} = props;
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.Link} onPress={() => navigation.navigate('Home')}>
        {' '}
        Home{' '}
      </Text>
      <Text style={styles.Link} onPress={() => navigation.navigate('Tasks')}>
        {' '}
        Tasks{' '}
      </Text>
      <Text
        style={styles.Link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
        {' '}
        Privacy Policy{' '}
      </Text>
      <Text
        style={styles.Link}
        onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>
        {' '}
        Terms and Conditions{' '}
      </Text>

      <Text style={styles.Link} onPress={logout}>
        {' '}
        Log out{' '}
      </Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  Link: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 13,
    margin: 8,
    marginHorizontal: 16,
  },
});

export default React.memo(DrawerContent);
