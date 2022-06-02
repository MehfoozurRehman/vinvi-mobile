import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function BtnComponent({
  placeholder,
  onPress,
  width,
  widthValue,
}) {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: width ? widthValue : '100%',
        backgroundColor: SECONDARY,
        marginVertical: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}
      onPress={onPress}>
      <Text style={{color: WHITE, fontSize: 14}}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
