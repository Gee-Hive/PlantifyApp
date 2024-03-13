import React from 'react';

import {Image, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';

const AddTasks = ({navigation}) => {
  const onHandleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.backContainer}
        hitSlop={8}
        onPress={onHandleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
