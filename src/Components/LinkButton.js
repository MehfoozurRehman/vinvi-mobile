import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function LinkButton({placeholder, svg, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: SECONDARY,
        marginHorizontal: 10,
        backgroundColor: WHITE,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {svg}
      <Text style={{marginLeft: 12, color: SECONDARY, fontSize: 12}}>
        {placeholder}
      </Text>
    </TouchableOpacity>
  );
}
