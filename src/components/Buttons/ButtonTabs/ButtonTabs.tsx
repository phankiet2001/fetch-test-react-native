import React, {FC, useState} from 'react';
import {View, ViewProps} from 'react-native';

import {TabButton} from '../TabButton';

import {buttonTabsStyles} from './styles';

interface ButtonTabsProps extends ViewProps {
  items: string[];
  activeItem: string;
  onChange?: (value: string) => void;
}

const ButtonTabs: FC<ButtonTabsProps> = ({
  items,
  activeItem,
  onChange,
  style: styleProps,
  ...props
}) => {
  const [active, setActive] = useState(activeItem);

  const handleOnPress = (item: string) => {
    setActive(item);
    onChange?.(item);
  };

  return (
    <View style={[buttonTabsStyles.container, styleProps]} {...props}>
      {items.map(i => (
        <TabButton
          title={i}
          key={i}
          isActive={i === active}
          onPress={() => handleOnPress(i)}
        />
      ))}
    </View>
  );
};

export default ButtonTabs;
