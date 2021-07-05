import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import PhoneVerificationScreen from '../Screens/PhoneVerificationScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import AddCardScreen from '../Screens/AddCardScreen';
import NewPersonalCardScreen1 from '../Screens/NewPersonalCardScreen1';
import NewPersonalCardScreen2 from '../Screens/NewPersonalCardScreen2';
import NewPersonalCardScreen3 from '../Screens/NewPersonalCardScreen3';
import NewPersonalCardScreen4 from '../Screens/NewPersonalCardScreen4';
import NewBusinessCardScreen from '../Screens/NewBusinessCardScreen';
import SearchScreen from '../Screens/SearchScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';
import MessagesScreen from '../Screens/MessagesScreen';
import ChangePassowrdScreen from '../Screens/ChangePassowrdScreen';
import RequestScreen from '../Screens/RequestScreen';
import NotificationScreen from '../Screens/NotificationScreen';

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
      <Stack.Screen
        name="NewPersonalCard1"
        component={NewPersonalCardScreen1}
        options={{}}
      />
      <Stack.Screen
        name="NewPersonalCard2"
        component={NewPersonalCardScreen2}
        options={{}}
      />
      <Stack.Screen
        name="NewPersonalCard3"
        component={NewPersonalCardScreen3}
        options={{}}
      />
      <Stack.Screen
        name="NewPersonalCard4"
        component={NewPersonalCardScreen4}
        options={{}}
      />
      <Stack.Screen
        name="NewBuisnessCard"
        component={NewBusinessCardScreen}
        options={{}}
      />
      <Stack.Screen name="Search" component={SearchScreen} options={{}} />
      <Stack.Screen name="Request" component={RequestScreen} options={{}} />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        options={{}}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} options={{}} />
      <Stack.Screen
        name="ChangePassowrd"
        component={ChangePassowrdScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}
