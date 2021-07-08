import React from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {SECONDARY, LIGHT_TEXT_COLOR} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import PhoneVerificationCell from '../Components/PhoneVerificationCell';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';

export default function PhoneVerificationScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/loginbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="light"
          headerName=""
          onPress={() => {
            navigation.navigate('ForgotPassword');
          }}
        />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              justifyContent: 'space-between',
              minHeight: 350,
              paddingHorizontal: 20,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: SECONDARY,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                Phone Verification
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: LIGHT_TEXT_COLOR,
                  marginBottom: 20,
                }}>
                Enter the 6-Digit Code you Recieved on you phone
              </Text>
              <PhoneVerificationCell />
            </View>
            <BtnComponent
              placeholder="Verify"
              // onPress={() => {
              //   navigation.navigate('PhoneVerification');
              // }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
