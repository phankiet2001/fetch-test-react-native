import React, {FC} from 'react';
import SVG, {Path, SvgProps} from 'react-native-svg';

const DraggableIcon: FC<SvgProps> = ({fill = '#0D0D0D', ...props}) => {
  return (
    <SVG fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
      <Path
        d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
        fill={fill}
      />
    </SVG>
  );
};

export default DraggableIcon;
