import React from 'react';
import {View, Text} from 'react-native';
import {SECONDARY} from '../Constants/Colors';

export default function ContactDetailsRowReverse({placeholder, value, svg}) {
  return (
    <View
      style={{
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        {svg}
        <Text style={{fontSize: 14, color: SECONDARY, marginLeft: 10}}>
          {placeholder}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          color: SECONDARY,
          fontWeight: 'bold',
          marginLeft: 10,
        }}>
        {value}
      </Text>
    </View>
  );
}
