import React, {FC} from 'react';
import {View, ViewProps, StyleProp, ViewStyle} from 'react-native';

import {LocationIcon, BlueDot} from '../../Icons';
import {BlueLine} from './../../Dividers';
import {AddressDetail} from './../AddressDetail';
import {Colors} from '@/const';

import {Address} from '../Address';
import type {AddressDetailProps} from '../AddressDetail';
import type {AddressProps} from '../Address';

import {locationTrackingStyles} from './styles';

type LocationTrackingProps = {
  lineStyle?: StyleProp<ViewStyle>;
  pickedUpLocationIconStyle?: StyleProp<ViewStyle>;
  droppedOffLocationIconStyle?: StyleProp<ViewStyle>;
  blueLineContainer?: StyleProp<ViewStyle>;
} & (
  | {
      type: 'normal';
      pickedUpAddress: AddressProps;
      droppedOffAddress: AddressProps;
    }
  | {
      type: 'detail';
      pickedUpAddress: AddressDetailProps;
      droppedOffAddress: AddressDetailProps;
    }
) &
  ViewProps;

const LocationTracking: FC<LocationTrackingProps> = ({
  lineStyle,
  type,
  droppedOffAddress,
  pickedUpAddress,
  pickedUpLocationIconStyle,
  blueLineContainer,
  droppedOffLocationIconStyle,
  ...props
}) => {
  return (
    <View {...props}>
      <View style={locationTrackingStyles.locationDetailArea}>
        <View>
          <View
            style={[
              locationTrackingStyles.locationIconContainer,
              pickedUpLocationIconStyle,
            ]}>
            <LocationIcon fill={Colors.deepBlue} />
          </View>
          <View
            style={[
              locationTrackingStyles.locationIconContainer,
              locationTrackingStyles.blueLineContainer,
              blueLineContainer,
            ]}>
            <BlueLine style={[locationTrackingStyles.blueLine, lineStyle]} />
          </View>
        </View>
        {type === 'detail' ? (
          <AddressDetail {...pickedUpAddress} />
        ) : (
          <Address {...pickedUpAddress} />
        )}
      </View>
      <View style={locationTrackingStyles.locationDetailArea}>
        <View>
          <View
            style={[
              locationTrackingStyles.blueDotContainer,
              droppedOffLocationIconStyle,
            ]}>
            <BlueDot />
          </View>
        </View>
        {type === 'detail' ? (
          <AddressDetail {...droppedOffAddress} />
        ) : (
          <Address {...droppedOffAddress} />
        )}
      </View>
    </View>
  );
};

export default LocationTracking;
