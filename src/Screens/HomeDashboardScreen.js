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
  SafeAreaView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default function HomeDashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/dashboardbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="drawer"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: -50,
          }}>
          <DashboardStories />
        </View>
        <ScrollView style={{flex: 1}}></ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
