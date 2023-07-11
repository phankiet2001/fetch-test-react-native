import React, {FC, useRef} from 'react';
import {View, Text} from 'react-native';
import {useMutation} from 'react-query';

import {
  CheckIcon,
  DraggableButton,
  DraggableButtonRef,
  LocationTracking,
} from '@/components';

import {Colors} from '@/const';

import {detailScreenStyles} from './styles';

const ModalContent: FC = () => {
  const buttonRef = useRef<DraggableButtonRef | null>(null);

  const {mutate, isLoading} = useMutation(
    async () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1);
        }, 2000);
      });
    },
    {
      onSuccess: () => {
        buttonRef?.current?.reset?.();
      },
    },
  );

  return (
    <View style={detailScreenStyles.contentContainer}>
      <View style={detailScreenStyles.contentHeaderContainer}>
        <View>
          <View style={detailScreenStyles.checkIconContainer}>
            <CheckIcon fill={Colors.white} />
          </View>
          <View />
        </View>
        <Text style={detailScreenStyles.contentHeading}>STANDARD RIDE</Text>
      </View>
      <LocationTracking
        type="detail"
        style={detailScreenStyles.marginBottom40}
        pickedUpAddress={{
          detail: 'Expo Hall 7, Singapore',
          name: 'Expo Hall 7',
          type: 'Picked up',
        }}
        droppedOffAddress={{
          detail: '14, Scotts Road, Orchard, Singapore, Singapore, 228213',
          name: 'Far East Plaza',
          type: 'Dropped - off',
          time: '6:06pm',
        }}
      />
      <View style={[detailScreenStyles.row, detailScreenStyles.marginBottom40]}>
        <Text
          style={[
            detailScreenStyles.text16,
            detailScreenStyles.fontWeight400,
            detailScreenStyles.textGrey,
          ]}>
          Job Date
        </Text>
        <Text
          style={[detailScreenStyles.text16, detailScreenStyles.fontWeight600]}>
          12/12/2003
        </Text>
      </View>
      <DraggableButton
        ref={buttonRef}
        isLoading={isLoading}
        onSwipeSuccess={mutate}
      />
    </View>
  );
};

export default ModalContent;
