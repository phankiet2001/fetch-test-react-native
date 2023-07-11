import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TouchableOpacityProps,
} from 'react-native';

import {LocationTracking} from '../LocationTracking';

import {ongoingCardStyles} from './styles';

const OngoingCard: FC<TouchableOpacityProps> = props => {
  return (
    <TouchableOpacity style={ongoingCardStyles.container} {...props}>
      <View style={ongoingCardStyles.heading}>
        <Text style={[ongoingCardStyles.textWhite, ongoingCardStyles.name]}>
          Expo Hall 7
        </Text>
        <View>
          <Text
            style={[
              ongoingCardStyles.textWhite,
              ongoingCardStyles.textAlignRight,
              ongoingCardStyles.price,
            ]}>
            $65.00
          </Text>
          <Text
            style={[
              ongoingCardStyles.textWhite,
              ongoingCardStyles.textAlignRight,
              ongoingCardStyles.duration,
            ]}>
            in 7 months
          </Text>
        </View>
      </View>
      <LocationTracking
        type="normal"
        pickedUpAddress={{
          content: ' - Expo Hall 7, Singapore',
          title: 'Expo Hall 7',
        }}
        droppedOffAddress={{
          title: 'Far East Plaza',
          content: ' - 14, Scotts Road, Orchard, Singapore, Singapore, 228213',
        }}
        pickedUpLocationIconStyle={ongoingCardStyles.pickedUpLocationIconStyle}
        blueLineContainer={ongoingCardStyles.blueLineContainer}
        lineStyle={ongoingCardStyles.lineStyle}
        droppedOffLocationIconStyle={
          ongoingCardStyles.droppedOffLocationIconStyle
        }
      />
    </TouchableOpacity>
  );
};

export default OngoingCard;
