import React, {FC} from 'react';
import {Text, View, ViewProps} from 'react-native';

import {addressStyles} from './styles';

export interface AddressProps extends ViewProps {
  title: string;
  content: string;
}

const Address: FC<AddressProps> = ({
  content,
  title,
  style: styleProps,
  ...props
}) => {
  return (
    <View style={[addressStyles.addressSection, styleProps]} {...props}>
      <Text style={[addressStyles.textWhite, addressStyles.name]}>
        {title}
        <Text style={addressStyles.address}>{content}</Text>
      </Text>
    </View>
  );
};

export default Address;
