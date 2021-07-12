import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import SocialLoginBtn from '../Components/SocialLoginBtn';
import RegisterInputBox from '../Components/RegisterInputBox';
import BtnComponent from '../Components/BtnComponent';
import {Height, Width} from '../Constants/Constants';

export default class RegisterScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ScrollView style={{flex: 1}}>
          <ImageBackground
            source={require('../Assets/registerbg.png')}
            style={{flex: 1, minHeight: Height}}>
            <View
              style={{
                width: '100%',
                height: '100%',
                paddingVertical: 20,
                paddingHorizontal: 20,
                paddingBottom: 50,
                display: 'flex',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={require('../Assets/vinvilightlogo.png')}
                style={{
                  marginVertical: 20,
                  alignSelf: 'center',
                  width: 100,
                  height: 55,
                }}></Image>
              <Text
                style={{
                  fontSize: 30,
                  color: WHITE,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                Join Us
              </Text>
              <RegisterInputBox
                placeholder="Phone or Username"
                inputType="text"
              />
              <RegisterInputBox placeholder="Password" inputType="password" />
              <RegisterInputBox
                placeholder="Confirm Password"
                inputType="password"
              />
              <BtnComponent
                placeholder="Sign Up"
                onPress={() => {
                  navigation.navigate('Dashboard');
                }}
              />
              <Text
                style={{alignSelf: 'center', color: WHITE, marginBottom: 10}}>
                OR
              </Text>
              <SocialLoginBtn />
              <View
                style={{
                  marginTop: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{color: WHITE, fontSize: 14}}>
                  Already have an account?
                </Text>
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{
                      color: SECONDARY,
                      textDecorationStyle: 'solid',
                      textDecorationLine: 'underline',
                      fontSize: 14,
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
