import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import SplashScreen from 'react-native-splash-screen';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </PaperProvider>
    );
  }
}
