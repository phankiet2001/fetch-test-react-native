import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackParamsList = {
  BottomTabs: undefined;
  Detail: undefined;
};

export type HomeScreenNavigationProps = NativeStackNavigationProp<
  MainStackParamsList,
  'Detail'
>;
