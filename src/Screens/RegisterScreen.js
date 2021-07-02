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
import {SECONDARY, WHITE} from '../Constants/Colors';
import SocialLoginBtn from '../Components/SocialLoginBtn';
import BtnComponent from '../Components/BtnComponent';
import {SafeAreaView} from 'react-native-safe-area-context';

function RegisterInputBox({placeholder, inputType}) {
  const [isfocused, setIsfocused] = useState(false);
  let secureTextEntry;
  if (inputType === 'password') {
    secureTextEntry = true;
  } else {
    secureTextEntry = false;
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '100%',
        backgroundColor: 'rgba(255,255,255,.7)',
        borderRadius: 5,
        marginVertical: 5,
      }}>
      {isfocused ? (
        <Text
          style={{
            width: '100%',
            paddingHorizontal: 20,
            paddingTop: 10,
            fontSize: 12,
            color: SECONDARY,
          }}>
          {placeholder}
        </Text>
      ) : null}
      <TextInput
        placeholder={placeholder}
        style={{
          width: '100%',
          paddingHorizontal: 20,
          height: 40,
          color: SECONDARY,
        }}
        type={inputType}
        secureTextEntry={secureTextEntry}
        onPressIn={() => {
          setIsfocused(true);
        }}
        onBlur={() => {
          setIsfocused(false);
        }}
      />
    </TouchableOpacity>
  );
}

export default function RegisterScreen({navigation}) {
  const [text, setText] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            backgroundColor: WHITE,
          }}>
          <ImageBackground
            source={require('../Assets/registerbg.png')}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                width: '100%',
                height: '100%',
                padding: 20,
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
                  fontSize: 20,
                  color: SECONDARY,
                  fontWeight: 'bold',
                  marginBottom: 20,
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
                <Text style={{color: WHITE, marginBottom: 20}}>
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
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
