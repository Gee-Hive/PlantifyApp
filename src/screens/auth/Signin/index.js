import React from 'react';
import {View} from 'react-native';
import Button from '../../../components/Button';

const Signin = () => {
  return (
    <View>
      <Button>Login</Button>
    </View>
  );
};

export default React.memo(Signin);
