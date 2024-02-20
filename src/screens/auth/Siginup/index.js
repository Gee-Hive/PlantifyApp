import React from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';

const Signup = () => {
  return (
    <View>
      <Button>Create new account</Button>
    </View>
  );
};

export default React.memo(Signup);
