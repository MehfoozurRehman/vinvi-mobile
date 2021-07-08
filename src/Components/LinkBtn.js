import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {LIGHT_TEXT_COLOR} from '../Constants/Colors';

export default function LinkBtn({svg, placeholder}) {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EFEFEF',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        marginVertical: 10,
      }}>
      {svg}
      <Text style={{fontSize: 14, color: LIGHT_TEXT_COLOR, marginLeft: 20}}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
}
