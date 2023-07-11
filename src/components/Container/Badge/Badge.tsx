import React, {FC, PropsWithChildren} from 'react';
import {View} from 'react-native';

import {badgeStyles} from './styles';

interface BadgeProps extends PropsWithChildren {
  active?: boolean;
}

const Badge: FC<BadgeProps> = ({children, active, ...props}) => {
  return (
    <View style={badgeStyles.container} {...props}>
      {children}
      {active && <View style={badgeStyles.dot} />}
    </View>
  );
};

export default Badge;
