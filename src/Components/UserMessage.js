import React from 'react';
import {View, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function UserMessage({placeholder}) {
  return (
    <View style={{alignItems: 'flex-end', marginBottom: 20}}>
      <View
        style={{
          width: '80%',
          backgroundColor: SECONDARY,
          padding: 20,
          borderRadius: 10,
        }}>
        <Text style={{color: WHITE}}>{placeholder}</Text>
      </View>
    </View>
  );
}
