import React, {FC} from 'react';
import SVG, {Path, SvgProps} from 'react-native-svg';

const LocationIcon: FC<SvgProps> = ({fill = '#0D0D0D', ...props}) => {
  return (
    <SVG fill="none" viewBox="0 0 24 24" height="24" width="24" {...props}>
      <Path
        d="M12 2C7.6 2 4 5.6 4 10C4 15.4 11 21.5 11.3 21.8C11.5 21.9 11.8 22 12 22C12.2 22 12.5 21.9 12.7 21.8C13 21.5 20 15.4 20 10C20 5.6 16.4 2 12 2ZM12 19.7C9.9 17.7 6 13.4 6 10C6 6.7 8.7 4 12 4C15.3 4 18 6.7 18 10C18 13.3 14.1 17.7 12 19.7ZM12 6C9.8 6 8 7.8 8 10C8 12.2 9.8 14 12 14C14.2 14 16 12.2 16 10C16 7.8 14.2 6 12 6ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z"
        fill={fill}
      />
    </SVG>
  );
};

export default LocationIcon;
