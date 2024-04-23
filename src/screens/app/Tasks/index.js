import React, {useEffect, useState} from 'react';

import {FlatList, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
// import Button from '../../../components/Button';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import useSelector, {useDispatch} from 'react-redux';
import Checkbox from '../../../components/Checkbox';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';
import firestore from '@react-native-firebase/firestore';
import {setToUpdate} from '../../../store/tasks';

const Tasks = () => {
  const tasks = useSelector(state => state.tasks.data);
  const [category, setCategory] = useState('all');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();

  const onTasksUpdate = item => {
    firestore()
      .collection('Users')
      .doc(item?.uid)
      .update({
        checked: !item.checked,
      })
      .then(() => {
        dispatch(setToUpdate());
      });
  };
  //useEffect listens to changes
  useEffect(() => {
    if (category && category !== 'all') {
      const filtered = tasks?.filter(task => task?.category === category);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [category, tasks]);

  const renderTasks = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={() => onTasksUpdate(item)} />
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
        ListHeaderComponent={
          <View style={{marginBottom: 24}}>
            <Title type="thin">To Do Tasks</Title>
            <Categories
              categories={[{label: 'All', value: 'all'}, ...categories]}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </View>
        }
        data={filteredTasks}
        renderItem={renderTasks}
        keyExtractor={item => item?.uid}
      />

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);
