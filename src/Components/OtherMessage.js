import React from 'react';
import {View, Text} from 'react-native';

export default function OtherMessage({placeholder}) {
  return (
    <View style={{alignItems: 'flex-start', marginBottom: 20}}>
      <View
        style={{
          width: '80%',
          backgroundColor: '#FBFBFB',
          padding: 20,
          borderRadius: 10,
        }}>
        <Text style={{color: '#000000'}}>{placeholder}</Text>
      </View>
    </View>
  );
}
