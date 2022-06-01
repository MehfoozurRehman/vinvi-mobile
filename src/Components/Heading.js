import React from 'react';
import {SECONDARY} from '../Constants/Colors';
import {Text} from 'react-native';

export default function Heading({placeholder}) {
  return (
    <Text
      style={{
        fontSize: 22,
        fontWeight: 'bold',
        color: SECONDARY,
        marginBottom: 10,
      }}>
      {placeholder}
    </Text>
  );
}
