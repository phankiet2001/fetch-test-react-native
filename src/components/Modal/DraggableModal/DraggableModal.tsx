import React, {FC, PropsWithChildren, useRef, useState, ReactNode} from 'react';
import {Animated, PanResponder, SafeAreaView} from 'react-native';

import {height} from '@/const';

import {draggableModalStyles} from './styles';

enum TransformValue {
  MINIMIZE = height * 0.3,
  DEFAULT = 0,
  FULLSCREEN = height,
}

type Direction = 'up' | 'down';

const MAX_UPWARD_TRANSLATE_FULL_SCREEN = TransformValue.FULLSCREEN * -0.5;
const MAX_TRANSLATE_HAFT_SCREEN = 0;
const MIN_DOWNWARD_TRANSLATE = TransformValue.MINIMIZE - TransformValue.DEFAULT;

const DRAG_THRESHOLD = 50;

const levelsOfTransform = [
  MAX_UPWARD_TRANSLATE_FULL_SCREEN,
  MAX_TRANSLATE_HAFT_SCREEN,
  MIN_DOWNWARD_TRANSLATE,
];

interface DraggableModalProps {
  renderTop?: (onBack: () => void) => ReactNode;
  renderModalHeader: () => ReactNode;
}

const DraggableModal: FC<PropsWithChildren<DraggableModalProps>> = ({
  children,
  renderModalHeader,
  renderTop,
}) => {
  const [fullScreen, setFullScreen] = useState(false);

  const animateValue = useRef(
    new Animated.Value(MAX_TRANSLATE_HAFT_SCREEN),
  ).current;
  const lastGestureDy = useRef(MAX_TRANSLATE_HAFT_SCREEN);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return !(lastGestureDy.current === MAX_UPWARD_TRANSLATE_FULL_SCREEN);
      },
      onPanResponderGrant: () => {
        animateValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (_, gesture) => {
        animateValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (_, gesture) => {
        animateValue.flattenOffset();
        if (gesture.dy > 0) {
          handleOnDragDown(gesture.dy);
        } else {
          handleOnDragUp(gesture.dy);
        }
      },
    }),
  ).current;

  const handleOnDragDown = (dy: number) => {
    if (dy <= DRAG_THRESHOLD) {
      springAnimation('up');
    } else if (lastGestureDy.current !== MIN_DOWNWARD_TRANSLATE) {
      springAnimation('down');
    }
  };

  const handleOnDragUp = (dy: number) => {
    if (dy >= -DRAG_THRESHOLD) {
      springAnimation('down');
    } else {
      springAnimation('up');
    }
  };
  const getTransformValue = (direction: Direction) => {
    if (
      lastGestureDy.current === MAX_UPWARD_TRANSLATE_FULL_SCREEN ||
      lastGestureDy.current === MIN_DOWNWARD_TRANSLATE
    ) {
      return levelsOfTransform[1];
    }

    const currentIndex = levelsOfTransform.findIndex(
      i => i === lastGestureDy.current,
    );

    return direction === 'up'
      ? levelsOfTransform[currentIndex - 1]
      : levelsOfTransform[currentIndex + 1];
  };

  const springAnimation = (direction: Direction) => {
    lastGestureDy.current = getTransformValue(direction);

    setFullScreen(lastGestureDy.current === MAX_UPWARD_TRANSLATE_FULL_SCREEN);

    Animated.spring(animateValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const handleOnPressBack = () => {
    springAnimation('down');
  };

  const modalAnimationStyles = {
    transform: [
      {
        translateY: animateValue.interpolate({
          inputRange: levelsOfTransform,
          outputRange: levelsOfTransform,
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    <Animated.View
      style={[draggableModalStyles.container, modalAnimationStyles]}
      {...panResponder.panHandlers}>
      <SafeAreaView>
        {fullScreen ? renderTop?.(handleOnPressBack) : renderModalHeader()}
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

export default DraggableModal;
