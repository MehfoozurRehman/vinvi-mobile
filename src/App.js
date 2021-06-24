import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './Navigation/StackNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </PaperProvider>
  );
}
