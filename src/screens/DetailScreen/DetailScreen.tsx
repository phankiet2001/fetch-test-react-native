import React, {FC} from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ArrowLeftIcon, IconButton, DraggableModal} from '@/components';

import ModalTop from './ModalTop';
import DetailScreenTop from './DetailScreenTop';
import ModalContent from './ModalContent';

import {detailScreenStyles} from './styles';

const DetailScreen: FC = () => {
  const navigation = useNavigation();

  const handleOnPressBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={detailScreenStyles.map}
      />
      <IconButton
        onPress={handleOnPressBack}
        style={detailScreenStyles.backButton}>
        <ArrowLeftIcon />
      </IconButton>
      <DraggableModal
        renderTop={onGoBack => <DetailScreenTop onClickBack={onGoBack} />}
        renderModalHeader={() => <ModalTop />}>
        <ModalContent />
      </DraggableModal>
    </View>
  );
};

export default DetailScreen;
