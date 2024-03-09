import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default React.memo(Home);
