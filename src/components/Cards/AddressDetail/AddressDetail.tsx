import React, {FC} from 'react';
import {View, Text, ViewProps} from 'react-native';

import {addressDetailStyles} from './styles';

export interface AddressDetailProps extends ViewProps {
  time?: string;
  name: string;
  detail: string;
  type: string;
}

const AddressDetail: FC<AddressDetailProps> = ({
  type,
  time,
  detail,
  name,
  style: styleProps,
  ...props
}) => {
  return (
    <View style={[addressDetailStyles.container, styleProps]} {...props}>
      {time && <Text style={addressDetailStyles.time}>{time}</Text>}
      <Text style={addressDetailStyles.name}>{name}</Text>
      <Text style={addressDetailStyles.detail}>{detail}</Text>
      <Text style={addressDetailStyles.locationType}>{type}</Text>
    </View>
  );
};

export default AddressDetail;
