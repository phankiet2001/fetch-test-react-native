import {StyleSheet} from 'react-native';
import {Colors} from '@/const';

export const ongoingCardStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    padding: 20,
  },
  textWhite: {
    color: Colors.white,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textAlignRight: {
    textAlign: 'right',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 4,
  },
  duration: {
    fontSize: 12,
    color: Colors.greyText,
  },
  pickedUpLocationIconStyle: {
    width: 10,
    marginRight: 15,
    marginBottom: 8,
  },
  blueLineContainer: {width: 2, marginBottom: 5},
  lineStyle: {height: 30},
  droppedOffLocationIconStyle: {
    width: 15,
    marginRight: 10,
  },
});
