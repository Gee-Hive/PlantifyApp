import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    paddingVertical: 24,
  },

  thin: {
    fontWeight: '300',
    fontSize: 24,
    color: colors.purple,
    paddingHorizontal: 24,
  },
});

export default styles;
