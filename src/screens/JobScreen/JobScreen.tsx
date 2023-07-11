import React, {FC} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ButtonTabs, OngoingCard} from '@/components';
import {HomeScreenNavigationProps} from '@/types';
import {MainStack} from '@/const';

import {jobScreenStyles} from './styles';

const JobScreen: FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const handleOnPress = () => {
    navigation.navigate(MainStack.Detail);
  };

  return (
    <SafeAreaView>
      <View style={jobScreenStyles.container}>
        <Text style={jobScreenStyles.title}>Jobs</Text>
        <View style={jobScreenStyles.tabs}>
          <ButtonTabs
            items={['Ongoing', 'Available', 'History']}
            activeItem="Ongoing"
          />
        </View>
        <OngoingCard onPress={handleOnPress} />
      </View>
    </SafeAreaView>
  );
};

export default JobScreen;
