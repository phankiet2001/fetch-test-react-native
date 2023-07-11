import React, {FC} from 'react';
import {TouchableOpacityProps, TouchableOpacity, Text} from 'react-native';

import {tabButtonStyles} from './styles';

interface TabButtonProps extends TouchableOpacityProps {
  isActive: boolean;
  title: String;
}

const TabButton: FC<TabButtonProps> = ({
  isActive,
  title,
  style: styleProps,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        tabButtonStyles.container,
        isActive ? tabButtonStyles.bgActive : tabButtonStyles.bgGrey,
        styleProps,
      ]}
      {...props}>
      <Text
        style={[
          tabButtonStyles.text,
          isActive ? tabButtonStyles.textActive : tabButtonStyles.textGrey,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TabButton;
