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
import {SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import SocialLoginBtn from '../Components/SocialLoginBtn';
import BtnComponent from '../Components/BtnComponent';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function LoginInputBox({placeholder, inputType}) {
  const [isfocused, setIsfocused] = useState(false);
  let secureTextEntry;
  let borderWidthConst;
  if (inputType === 'password') {
    secureTextEntry = true;
  } else {
    secureTextEntry = false;
  }
  if (isfocused) {
    borderWidthConst = 1;
  } else if (!isfocused) {
    borderWidthConst = 0;
  }
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        width: '100%',
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        marginVertical: 5,
        borderWidth: borderWidthConst,
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
