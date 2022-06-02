import React, {useState} from 'react';
import {Text, TouchableOpacity, TextInput, View} from 'react-native';
import {SECONDARY, TEXT_COLOR} from '../Constants/Colors';

export default function LoginInputBox({placeholder, inputType, onChange}) {
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
        marginVertical: 10,
        borderWidth: 1,
        borderColor: isfocused ? SECONDARY : '#EFEFEF',
        position: 'relative',
      }}>
      {isfocused ? (
        <View
          style={{
            position: 'absolute',
            top: -20,
            left: 0,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: SECONDARY,
            }}>
            {placeholder}
          </Text>
        </View>
      ) : null}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={TEXT_COLOR}
        style={{
          width: '100%',
          paddingHorizontal: 20,
          height: 45,
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
