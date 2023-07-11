import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {IconButton, ArrowLeftIcon} from '@/components';

import {detailScreenStyles} from './styles';

interface DetailScreenTopProps {
  onClickBack: () => void;
}

const DetailScreenTop: FC<DetailScreenTopProps> = ({onClickBack}) => {
  return (
    <View style={detailScreenStyles.borderBottom}>
      <View style={[detailScreenStyles.row, detailScreenStyles.marginBottom20]}>
        <View style={detailScreenStyles.flex1}>
          <IconButton
            onPress={onClickBack}
            style={[detailScreenStyles.headerBackButton]}>
            <ArrowLeftIcon strokeWidth={2} />
          </IconButton>
        </View>
        <Text
          style={[
            detailScreenStyles.flex1,
            detailScreenStyles.textCenter,
            detailScreenStyles.detailScreenTitle,
          ]}>
          LY-4b3dec
        </Text>
        <View style={detailScreenStyles.flex1} />
      </View>
      <Text
        style={[
          detailScreenStyles.textCenter,
          detailScreenStyles.title,
          detailScreenStyles.marginBottom15,
        ]}>
        $65.00
      </Text>
    </View>
  );
};

export default DetailScreenTop;
