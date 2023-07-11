import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {IconButton, LocationIcon} from '@/components';

import {detailScreenStyles} from './styles';

const ModalTop: FC = () => {
  return (
    <View
      style={[detailScreenStyles.modalHeadingDefault, detailScreenStyles.row]}>
      <View style={detailScreenStyles.row}>
        <Text style={[detailScreenStyles.textWhite, detailScreenStyles.number]}>
          12
        </Text>
        <View>
          <Text
            style={[
              detailScreenStyles.textWhite,
              detailScreenStyles.title,
              detailScreenStyles.marginBottom2,
            ]}>
            December
          </Text>
          <Text
            style={[detailScreenStyles.textWhite, detailScreenStyles.carId]}>
            N98599
          </Text>
        </View>
      </View>
      <Text style={[detailScreenStyles.textWhite, detailScreenStyles.title]}>
        $65.00
      </Text>
      <IconButton style={detailScreenStyles.currentLocationButton}>
        <LocationIcon />
      </IconButton>
    </View>
  );
};

export default ModalTop;
