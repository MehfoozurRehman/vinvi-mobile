import React, {Component} from 'react';
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {SECONDARY, LIGHT_TEXT_COLOR} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import PhoneVerificationCell from '../Components/PhoneVerificationCell';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';

export default class PhoneVerificationScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/loginbg.png')}
          style={{flex: 1, height: Height}}>
          <Header
            navigation={navigation}
            variant="light"
            headerName=""
            onPress={() => {
              navigation.navigate('ForgotPassword');
            }}
          />
          <View
            style={{
              paddingVertical: 50,
              paddingHorizontal: 20,
              display: 'flex',
              justifyContent: 'space-between',
              height: Height - 100,
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
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
