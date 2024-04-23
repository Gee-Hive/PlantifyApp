import React from 'react';

import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import useSelector from 'react-redux';
import Checkbox from '../../../components/Checkbox';

const Tasks = () => {
  const tasks = useSelector(state => state.tasks.data);

  const renderTasks = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} />
        <Text style={[styles.tasksText, item?.checked ? styles.checked : {}]}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tasks" />

      <FlatList
        ListHeaderComponent={<Title type="thin">To Do Tasks</Title>}
        data={tasks}
        renderItem={renderTasks}
        keyExtractor={item => item?.uid}
      />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
