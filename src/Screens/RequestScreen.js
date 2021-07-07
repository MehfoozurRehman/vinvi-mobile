import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Header from '../Components/Header';
import TopTabsNavigator from '../Navigation/TopTabsNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';

export default function RequestScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1, height: 800}}>
        <ScrollView style={{flex: 1}}>
          <Header
            navigation={navigation}
            variant="dark"
            headerName="Request"
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
          <TopTabsNavigator variant="request" />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
