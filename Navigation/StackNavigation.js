import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Services" component={HomeScreen} />
    </Stack.Navigator>
  );
}
