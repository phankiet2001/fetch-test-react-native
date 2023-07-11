import React, {FC} from 'react';

import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowLeftIcon: FC<SvgProps> = props => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M15 18L9 12L15 6"
        stroke="#171725"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
