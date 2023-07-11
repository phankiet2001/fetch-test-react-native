import React, {
  ForwardRefRenderFunction,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  View,
  Text,
  PanResponder,
  Animated,
  ActivityIndicator,
  ViewProps,
} from 'react-native';

import {width} from '@/const';
import {DraggableIcon} from '../../Icons';

import {draggableButtonStyles} from './styles';

const MAX_DRAGGABLE_TRANSLATE = width * 0.74;
const DEFAULT_TRANSLATE_VALUE = 0;

interface DraggableButtonProps extends ViewProps {
  isLoading: boolean;
  onSwipeSuccess: () => void;
}

export interface DraggableButtonRef {
  reset: () => void;
}

const DraggableButton: ForwardRefRenderFunction<
  DraggableButtonRef,
  DraggableButtonProps
> = ({isLoading, onSwipeSuccess, ...props}, ref) => {
  const animateValue = useRef(
    new Animated.Value(DEFAULT_TRANSLATE_VALUE),
  ).current;
  const lastGestureDy = useRef(DEFAULT_TRANSLATE_VALUE);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () =>
        !(lastGestureDy.current >= MAX_DRAGGABLE_TRANSLATE),
      onPanResponderGrant: () => {
        animateValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx <= MAX_DRAGGABLE_TRANSLATE) {
          animateValue.setValue(gesture.dx);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        animateValue.flattenOffset();
        if (gesture.dx >= MAX_DRAGGABLE_TRANSLATE) {
          lastGestureDy.current = MAX_DRAGGABLE_TRANSLATE;
          animateValue.setValue(MAX_DRAGGABLE_TRANSLATE);
          onSwipeSuccess();
        } else {
          lastGestureDy.current = DEFAULT_TRANSLATE_VALUE;
          animateValue.setValue(DEFAULT_TRANSLATE_VALUE);
        }
      },
    }),
  ).current;
  const animatedStyles = {
    transform: [
      {
        translateX: animateValue.interpolate({
          inputRange: [DEFAULT_TRANSLATE_VALUE, MAX_DRAGGABLE_TRANSLATE],
          outputRange: [DEFAULT_TRANSLATE_VALUE, MAX_DRAGGABLE_TRANSLATE],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      lastGestureDy.current = DEFAULT_TRANSLATE_VALUE;
      animateValue.setValue(DEFAULT_TRANSLATE_VALUE);
    },
  }));

  return (
    <View style={draggableButtonStyles.container} {...props}>
      <Text style={draggableButtonStyles.text}>Complete</Text>
      <Animated.View
        style={[draggableButtonStyles.dragPoint, animatedStyles]}
        {...panResponder.panHandlers}>
        {isLoading ? <ActivityIndicator /> : <DraggableIcon />}
      </Animated.View>
    </View>
  );
};

export default forwardRef<DraggableButtonRef, DraggableButtonProps>(
  DraggableButton,
);
