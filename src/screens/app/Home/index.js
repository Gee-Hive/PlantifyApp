import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';

const Home = () => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);

  const dispatch = useDispatch();

  useEffect(() => {
    firestore()
      .collection('Tasks')
      .where('userId', '==', user?.uid)
      .get()
      .then(querySnapshot => {
        console.log('Total tasks: ', querySnapshot.size);
        const tasksList = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          tasksList.push({
            uid: documentSnapshot.id,
            ...(documentSnapshot.data() || {}),
          });
        });
        dispatch(setTasks(tasksList));
      });
  }, [user, toUpdate, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks</Title>

        <View style={styles.row}>
          <StatusCard label="High Priority" count={3} />
          <StatusCard label="Due Deadline" type="error" count={3} />
          <StatusCard label="Quick Win" count={1} />
        </View>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
