import React, {FC} from 'react';
import SVG, {Path, SvgProps} from 'react-native-svg';

import {Colors} from '@/const';

const CoinBottomTab: FC<SvgProps> = ({fill = Colors.lightGrey, ...props}) => {
  return (
    <SVG fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
      <Path
        d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill={fill}
      />
    </SVG>
  );
};

export default CoinBottomTab;
