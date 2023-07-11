import {StyleSheet} from 'react-native';

import {Colors} from '@/const';

export const addressDetailStyles = StyleSheet.create({
  container: {
    paddingRight: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
  },
  detail: {
    fontSize: 16,
    color: Colors.greyText,
    marginBottom: 5,
  },
  locationType: {
    color: Colors.green,
    fontWeight: '600',
    fontSize: 14,
  },
  time: {
    fontSize: 16,
    color: Colors.deepBlue,
    marginBottom: 10,
  },
});
