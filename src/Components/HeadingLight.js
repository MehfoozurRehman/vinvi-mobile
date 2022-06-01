import React from 'react';
import {WHITE} from '../Constants/Colors';
import {Text} from 'react-native';

export default function HeadingLight({placeholder}) {
  return (
    <Text
      style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: WHITE,
        marginBottom: 10,
      }}>
      {placeholder}
    </Text>
  );
}
