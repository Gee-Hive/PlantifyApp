import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {},

  backContainer: {
    padding: 24,
  },
  backIcon: {
    width: 32,
    height: 32,
  },

  label: {
    color: colors.black,
    fontSize: 12,
    marginHorizontal: 32,
    fontWeight: '500',
    marginTop: 12,
  },

  button: {
    margin: 24,
  },
});

export default styles;
