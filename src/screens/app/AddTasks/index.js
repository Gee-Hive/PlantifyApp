import React, {useState} from 'react';

import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';
import DateInput from '../../../components/DateInput';
import Button from '../../../components/Button';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {setToUpdate} from '../../../store/tasks';

const AddTasks = ({navigation}) => {
  const user = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const onHandleBack = () => {
    navigation.goBack();
  };

  const onSubmit = () => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadloneFormatted = moment(deadline).format('YYYY-MM-DD');
    if (!title) {
      Alert.alert('please enter the tasks title');
      return;
    }

    if (moment(deadloneFormatted).isBefore(today)) {
      Alert.alert('please enter a future date');
      return;
    }

    setLoading(true);
    firestore()
      .collection('Tasks')
      .add({
        title,
        deadline,
        category,
        checked: false,
        userId: user?.uid,
      })
      .then(() => {
        setLoading(false);
        dispatch(setToUpdate());
        setTitle('');
        setDeadline(new Date());
        setCategory(null);
        navigation.navigate('Tasks');
        console.log('Task added!');
      })
      .catch(e => {
        setLoading(false);
        Alert.alert(e.message);
        console.log('error', e);
      });
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

      <ScrollView>
        <Title type="thin">Add New Tasks</Title>
        <Text style={styles.label}>Describe the Tasks here</Text>
        <Input
          value={title}
          onChangeText={setTitle}
          outlined
          placeholder="Type here ..."
        />
        <Text style={styles.label}>type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />

        <Text style={styles.label}> Deadline</Text>

        <DateInput value={deadline} onChange={setDeadline} />

        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button style={styles.button} type="blue" onPress={onSubmit}>
            {' '}
            Add the tasks{' '}
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
