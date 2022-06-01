import React, {useState} from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import {SECONDARY, TEXT_COLOR} from '../Constants/Colors';

export default function LoginInputBox({placeholder, inputType, onChange}) {
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
        marginVertical: 10,
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
        placeholderTextColor={TEXT_COLOR}
        style={{
          width: '100%',
          paddingHorizontal: 20,
          height: 50,
          color: SECONDARY,
        }}
        type={inputType}
        keyboardType={inputType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
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
