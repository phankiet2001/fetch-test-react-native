import {StyleSheet} from 'react-native';

import {Colors} from '@/const';

export const badgeStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.redDark,
    top: 0,
    right: 0,
  },
});
