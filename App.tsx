import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {createStackNavigator} from '@react-navigation/stack';

import {BottomTabs} from '@/navigation';
import {DetailScreen} from '@/screens';
import {HomeStackParamsList} from '@/types';

const queryClient = new QueryClient();
const Stack = createStackNavigator<HomeStackParamsList>();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
