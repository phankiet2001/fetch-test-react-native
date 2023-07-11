import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

import {blueLineStyles} from './styles';

const BlueLine: FC<ViewProps> = ({style: styleProps, ...props}) => {
  return <View style={[blueLineStyles.blueLine, styleProps]} {...props} />;
};

export default BlueLine;
