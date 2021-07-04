import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchIndividualScreen from '../Screens/SearchIndividualScreen';
import SearchBuisnessScreen from '../Screens/SearchBuisnessScreen';
import {SECONDARY, WHITE} from '../Constants/Colors';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Individual"
      tabBarOptions={{
        labelStyle: {fontSize: 12, color: WHITE},
        style: {
          backgroundColor: 'transparent',
          borderWidth: 0,
          elevation: 0,
          marginHorizontal: 20,
          marginTop: 10,
          marginBottom: 30,
        },
        bounces: true,
      }}>
      <Tab.Screen name="Individual" component={SearchIndividualScreen} />
      <Tab.Screen name="Buisness" component={SearchBuisnessScreen} />
    </Tab.Navigator>
  );
}
