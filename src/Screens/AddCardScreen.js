import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';

export default function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/addcardbg.png')}
          style={{width: '100%', minHeight: '100%'}}>
          <Header
            navigation={navigation}
            variant="dark"
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
            headerName="Add Card"
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
          <View
            style={{
              width: '100%',
              height: 550,
              padding: 20,
              paddingTop: 100,
            }}>
            <View
              style={{
                width: '100%',
                height: '50%',
                padding: 20,
                paddingTop: 100,
              }}></View>
            <View
              style={{
                width: '100%',
                height: '50%',
                padding: 20,
                paddingTop: 100,
              }}></View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
