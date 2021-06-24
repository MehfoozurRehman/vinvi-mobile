import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import StackNavigation from './Navigation/StackNavigation';
import RNBootSplash from 'react-native-bootsplash';
import {View} from 'react-native';
import {white, PRIMARY} from './Colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: PRIMARY,
    accent: '#222223',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <View style={{flex: 1}}>
          <StackNavigation />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}
