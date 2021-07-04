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
import OutlinedInputBox from '../Components/OutlinedInputBox';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, widht: Width}}>
      <ImageBackground
        source={require('../Assets/loginbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="light"
          // headerIcon={
          //   <Svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width={20.936}
          //     height={20.828}
          //     viewBox="0 0 24.936 25.828">
          //     <Path
          //       d="M24.557 23.525l-6.147-6.393a10.424 10.424 0 10-7.982 3.724 10.316 10.316 0 005.974-1.887l6.194 6.442a1.36 1.36 0 101.96-1.886zM10.428 2.72a7.708 7.708 0 11-7.712 7.708 7.716 7.716 0 017.712-7.708z"
          //       fill="#4a5a92"
          //     />
          //   </Svg>
          // }
          headerName=""
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              paddingHorizontal: 20,
              display: 'flex',
              justifyContent: 'space-between',
              minHeight: 350,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: SECONDARY,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Forgot Password
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: LIGHT_TEXT_COLOR,
                  marginBottom: 20,
                }}>
                Enter you phone number to recover
              </Text>
              <OutlinedInputBox placeholder="Phone" inputType="text" />
            </View>
            <BtnComponent
              placeholder="Send Code"
              onPress={() => {
                navigation.navigate('PhoneVerification');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
