import React from 'react';

import {Image, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const onBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../../assets/Onboarding.png')}
        />

        <View style={styles.footer} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subTitle}>
          Get organized by sorting out all your tasks and boost your
          productivity
        </Text>

        <Button onPress={() => navigation.navigate('Signin')}> Log In </Button>
        <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>
          {' '}
          Get Started{' '}
        </Button>
      </View>
    </View>
  );
};

export default React.memo(onBoarding);
