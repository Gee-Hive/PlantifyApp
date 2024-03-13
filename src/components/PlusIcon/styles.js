import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  plus: {
    fontSize: 32,
    fontWeight: '600',
    color: colors.white,
    marginTop: -2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
});

export default styles;
