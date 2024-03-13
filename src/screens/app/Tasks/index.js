import React from 'react';

import {SafeAreaView, ScrollView, Text} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';

const Tasks = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <ScrollView>
        <Text>Tasks</Text>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
