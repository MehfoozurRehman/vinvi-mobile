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
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';

function LoginInputBox({placeholder, inputType}) {
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
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: SECONDARY,
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

export default function DashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/dashboardbg.png')}
          style={{flex: 1, height: Dimensions.get('window').height}}>
          <Header
            navigation={navigation}
            variant="drawer"
            // onPress={() => {
            //   navigation.navigate('Login');
            // }}
          />
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <DashboardStories />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddCard');
              }}>
              <Text>Add Card</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
}
