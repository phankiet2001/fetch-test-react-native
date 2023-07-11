import {StyleSheet} from 'react-native';

import {Colors} from '@/const';

export const draggableButtonStyles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.deepBlue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  dragPoint: {
    height: 54,
    width: 54,
    borderRadius: 27,
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 3,
    left: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
