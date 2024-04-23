import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import {useSelector} from 'react-redux';

const Home = () => {
  const user = useSelector(state => state.user.data);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks</Title>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
