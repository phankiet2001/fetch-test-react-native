/* eslint-disable react/no-unstable-nested-components */
import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Badge,
  CoinBottomTab,
  HomeBottomTabIcon,
  MapBottomTab,
  MenuBottomTab,
} from '@/components';
import {BottomRouteName, Colors} from '@/const';
import {HomeScreen, JobScreen, CoinScreen, MenuScreen} from '@/screens';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={BottomRouteName.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Badge>
              <HomeBottomTabIcon
                fill={focused ? Colors.deepBlue : Colors.lightGrey}
              />
            </Badge>
          ),
        }}
      />
      <Tab.Screen
        name={BottomRouteName.Coin}
        component={CoinScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Badge>
              <CoinBottomTab
                fill={focused ? Colors.deepBlue : Colors.lightGrey}
              />
            </Badge>
          ),
        }}
      />
      <Tab.Screen
        name={BottomRouteName.Job}
        component={JobScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Badge active>
              <MapBottomTab
                fill={focused ? Colors.deepBlue : Colors.lightGrey}
              />
            </Badge>
          ),
        }}
      />
      <Tab.Screen
        name={BottomRouteName.Menu}
        component={MenuScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Badge>
              <MenuBottomTab
                fill={focused ? Colors.deepBlue : Colors.lightGrey}
              />
            </Badge>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
