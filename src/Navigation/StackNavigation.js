import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';

Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{}} />
      <Stack.Screen name="Login" component={LoginScreen} options={{}} />
    </Stack.Navigator>
  );
}
