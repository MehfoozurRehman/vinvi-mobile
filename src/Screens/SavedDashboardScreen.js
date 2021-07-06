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
import UserCard from '../Components/UserCard';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default function SavedDashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1, paddingBottom: 100}}>
        <Header
          navigation={navigation}
          variant="dark"
          headerName="Saved"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={22.295}
              height={19.508}
              viewBox="0 0 22.295 19.508">
              <Path
                data-name="Icon awesome-heart"
                d="M20.131 1.334a5.955 5.955 0 00-8.13.592l-.858.884-.858-.884a5.954 5.954 0 00-8.125-.592 6.253 6.253 0 00-.431 9.053l8.426 8.7a1.365 1.365 0 001.973 0l8.426-8.7a6.249 6.249 0 00-.427-9.053z"
                fill="#fff"
              />
            </Svg>
          }
        />
        <ScrollView style={{flex: 1}}>
          <UserCard variant="closed" />
          <UserCard variant="broadcasted" />
          <UserCard variant="open" />
          <UserCard variant="closed" />
          <UserCard variant="broadcasted" />
          <UserCard variant="open" />
          <UserCard variant="closed" />
          <UserCard variant="broadcasted" />
          <UserCard variant="open" />
          <UserCard variant="closed" />
          <UserCard variant="broadcasted" />
          <UserCard variant="open" />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
