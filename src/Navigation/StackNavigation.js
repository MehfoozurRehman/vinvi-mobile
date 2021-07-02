import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import PhoneVerificationScreen from '../Screens/PhoneVerificationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import AddCardScreen from '../Screens/AddCardScreen';

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
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{}}
      />
      <Stack.Screen
        name="PhoneVerification"
        component={PhoneVerificationScreen}
        options={{}}
      />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{}} />
      <Stack.Screen name="AddCard" component={AddCardScreen} options={{}} />
    </Stack.Navigator>
  );
}
