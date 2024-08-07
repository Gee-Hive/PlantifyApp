import React, {useState} from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './styles';
import moment from 'moment';
// import colors from '../../constants/colors';

const DateInput = ({value, onChange, ...props}) => {
  const [open, setOpen] = useState(false);
  const onDateOPen = function () {
    setOpen(true);
  };
  return (
    <>
      <TouchableOpacity onPress={onDateOPen} style={styles.outlined}>
        <Image
          resizeMode="contain"
          style={styles.icon}
          source={require('../../assets/DatePicker.png')}
        />
        <Text style={styles.text}>
          {moment(value).format('L') || 'Select Date...'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={value}
        onConfirm={date => {
          setOpen(false);
          onChange(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(DateInput);
