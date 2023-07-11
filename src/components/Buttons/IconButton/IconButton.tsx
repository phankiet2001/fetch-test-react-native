import React, {FC, PropsWithChildren} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {iconButtonStyles} from './styles';

type IconButtonProps = PropsWithChildren<TouchableOpacityProps>;

const IconButton: FC<IconButtonProps> = ({
  children,
  style: styleProps,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[iconButtonStyles.container, styleProps]}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
