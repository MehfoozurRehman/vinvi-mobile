import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, LIGHT_TEXT_COLOR} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import {Height, Width} from '../Constants/Constants';

export default class ForgetPasswordScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, widht: Width}}>
        <ImageBackground
          source={require('../Assets/loginbg.png')}
          style={{flex: 1, height: Height}}>
          <Header
            navigation={navigation}
            variant="light"
            headerName=""
            onPress={() => {
              navigation.navigate('Login');
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
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
