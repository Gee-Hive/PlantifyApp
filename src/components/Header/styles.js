import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.purple,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
