import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import SearchIndividualScreen from '../Screens/SearchIndividualScreen';
import SearchBuisnessScreen from '../Screens/SearchBuisnessScreen';

const Tab = createMaterialTopTabNavigator();

function TopTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Individual" component={SearchIndividualScreen} />
      <Tab.Screen name="Buisness" component={SearchBuisnessScreen} />
    </Tab.Navigator>
  );
}
