import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import UploadBtn from '../Components/UploadBtn';
import TopTabsNavigator from '../Navigation/TopTabsNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
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
