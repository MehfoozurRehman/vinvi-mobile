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
import {SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import SocialLoginBtn from '../Components/SocialLoginBtn';
import BtnComponent from '../Components/BtnComponent';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import {Height, Width} from '../Constants/Constants';

export default function LoginScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/loginbg.png')}
          style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              height: '100%',
              paddingVertical: 20,
              paddingHorizontal: 30,
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Image
              source={require('../Assets/vinvilogo.png')}
              style={{
                marginVertical: 20,
                alignSelf: 'center',
                width: 100,
                height: 55,
              }}></Image>
            <Text
              style={{
                fontSize: 30,
                color: SECONDARY,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Login
            </Text>
            <OutlinedInputBox
              placeholder="Phone or Username"
              inputType="text"
            />
            <OutlinedInputBox placeholder="Password" inputType="password" />
            <View
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text
                  style={{
                    color: TEXT_COLOR,
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                  }}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <BtnComponent
              placeholder="Login"
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: SECONDARY,
                marginBottom: 25,
              }}>
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
              <Text style={{color: WHITE, marginBottom: 20}}>
                Dont have an account?
              </Text>
              <TouchableOpacity
                style={{marginLeft: 10}}
                onPress={() => {
                  navigation.navigate('Register');
                }}>
                <Text
                  style={{
                    color: SECONDARY,
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
