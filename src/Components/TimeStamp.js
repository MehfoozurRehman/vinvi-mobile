import React from 'react';
import {View, Text} from 'react-native';
import {SECONDARY} from '../Constants/Colors';

export default function TimeStamp({placeholder}) {
  return (
    <View style={{width: '100%', marginBottom: 20, alignItems: 'center'}}>
      <Text style={{color: SECONDARY}}>{placeholder}</Text>
    </View>
  );
}
