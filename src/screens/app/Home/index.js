import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import Header from '../../../components/Header';
import PlusIcon from '../../../components/PlusIcon';
import Title from '../../../components/Title';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks} from '../../../store/tasks';
import StatusCard from '../../../components/StatusCard';
import moment from 'moment';
import {Text} from 'react-native-reanimated/lib/typescript/Animated';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const tasks = useSelector(state => state.tasks.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const [counts, setCounts] = useState({});

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

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks?.filter(
        task => task?.category === 'urgent' || task?.category === 'important',
      );

      const today = moment(new Date()).format('YYYY-MM-DD');
      const dueDeadline = tasks?.filter(task => {
        const deadline = task?.deadine?.seconds * 1000;
        const deadlineFormatted = moment(deadline).format('YYYY-MM-DD');
        return moment(deadlineFormatted).isBefore(today);
      });

      const quickWin = tasks?.filter(task => task?.category === 'quick_task');

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDeadline?.length,
        quickWin: quickWin?.length,
      });
    }
  }, [tasks]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks</Title>

        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority} />
          <StatusCard
            label="Due Deadline"
            type="error"
            count={counts?.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>

        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Check all my Tasks</Text>
          <Text style={styles.subTitle}>
            See all Tasks and filter them by categories you have selected when
            creating them
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);
