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
import {
  SECONDARY,
  TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function BtnComponent({placeholder, onPress}) {
  return (
    <TouchableOpacity
      style={{
        height: 45,
        width: '100%',
        backgroundColor: SECONDARY,
        marginVertical: 25,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      }}
      onPress={onPress}>
      <Text style={{color: WHITE, fontSize: 14}}>{placeholder}</Text>
    </TouchableOpacity>
  );
}
