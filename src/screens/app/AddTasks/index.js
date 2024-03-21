import React, {useState} from 'react';

import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import Categories from '../../../components/Categories';
import {categories} from '../../../constants/categories';

const AddTasks = ({navigation}) => {
  const [category, setCategory] = useState();
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
      <Title type="thin">Add New Tasks</Title>
      <Text style={styles.label}>Describe the Tasks here</Text>
      <Input outlined placeholder="Type here ..." />
      <Text style={styles.label}>type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory}
      />

      <Text style={styles.label}>type</Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTasks);
