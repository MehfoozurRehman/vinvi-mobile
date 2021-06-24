import React from 'react';
import {Text} from 'react-native';
import {TEXT_COLOR} from '../Constants/Colors';
export default function Paragraph({placeholder}) {
  return (
    <Text style={{fontSize: 14, color: TEXT_COLOR, textAlign: 'justify'}}>
      {placeholder}
    </Text>
  );
}
