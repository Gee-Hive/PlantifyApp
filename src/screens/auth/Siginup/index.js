import React, {useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';
import Input from '../../../components/Input';
import Title from '../../../components/Title';
import Checkbox from '../../../components/Checkbox';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';

const Signup = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const onCheckBoxPress = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the Hub!</Title>

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckBoxPress} />

        <Text style={styles.agreeText}>
          I agree to
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            {' '}
            Terms and Conditions
          </Text>{' '}
          and
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
      </View>

      <Button type="blue">Create new account</Button>

      <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.footerLink}>
          {' '}
          Sign in!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(Signup);
