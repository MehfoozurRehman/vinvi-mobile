import React, {useState} from 'react';
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
import RegisterInputBox from '../Components/RegisterInputBox';
import BtnComponent from '../Components/BtnComponent';
import {Height, Width} from '../Constants/Constants';
import {signUpApiCall} from '../Apis/Repo';
import {isInvalidPassword} from '../Constants/Validations';
import {
  MATCH_ERROR,
  MINIMUM_PASSWORD,
  PASSWORD_ERROR,
  PHONE_EMPTY_ERROR,
  PHONE_LENGTH_ERROR,
} from '../Constants/Strings';
import {
  isNullOrEmpty,
  phoneLengthNotValid,
  stringsNotEqual,
} from '../Constants/TextUtils';

export default function RegisterScreen(props) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSignUp = () => {
    if (isNullOrEmpty(phoneNumber)) alert(PHONE_EMPTY_ERROR);
    else if (phoneLengthNotValid(phoneNumber)) alert(PHONE_LENGTH_ERROR);
    else if (isNullOrEmpty(password)) alert(PASSWORD_ERROR);
    else if (isInvalidPassword(password)) alert(MINIMUM_PASSWORD);
    else if (isNullOrEmpty(confirmPassword)) alert(PASSWORD_ERROR);
    else if (stringsNotEqual(password, confirmPassword)) alert(MATCH_ERROR);
    else {
      let object = {
        Phoneno: phoneNumber,
        LoginPassword: password,
      };
      console.log('object', object);

      signUpApiCall(object)
        .then(response => {
          console.log('response', response);

          if (response.data.status == 335) {
            props.navigation.push('PhoneVerification', {
              paramKey: phoneNumber,
              paramKey1: password,
            });
          } else {
            alert(response.data.message);
            console.log('ADD');
          }
        })
        .catch(err => {
          console.log('err', err);
        });
    }
  };

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
              inputType="number-pad"
              onChange={value => {
                setPhoneNumber(value);
              }}
            />
            <RegisterInputBox
              placeholder="Password"
              inputType="password"
              onChange={value => {
                setPassword(value);
              }}
            />

            <RegisterInputBox
              placeholder="Confirm Password"
              inputType="password"
              onChange={value => {
                setConfirmPassword(value);
              }}
            />
            <BtnComponent
              placeholder="Sign Up"
              onPress={() => {
                onSignUp();
              }}
            />
            <Text style={{alignSelf: 'center', color: WHITE, marginBottom: 10}}>
              OR
            </Text>
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
                  props.navigation.push('Login');
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
