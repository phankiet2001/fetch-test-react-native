import {StyleSheet} from 'react-native';
import {Colors, height, width} from '@/const';

export const draggableModalStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    bottom: height * -0.5,
    height: height,
    width: width,
    borderRadius: 4,
    zIndex: 10,
    backgroundColor: Colors.white,
  },
});
