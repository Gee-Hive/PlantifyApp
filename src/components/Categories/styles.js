import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: colors.blue,
    borderWidth: 1,
    borderColor: colors.blue,
    borderRadius: 8,
    fontWeight: 'bold',
    padding: 8,
    paddingHorizontal: 12,
    textTransform: 'capitalize',
  },
  selectedItem: {
    color: colors.blue,
  },
  itemContainer: {
    borderColor: colors.blue,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 14,
  },
  selectedItemContainer: {
    backgroundColor: colors.lightGrey,
    borderColor: colors.lightGrey,
    borderRadius: 10,
  },
});

export default styles;
