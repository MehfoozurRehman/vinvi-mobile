import React from 'react';
import {View, Text} from 'react-native';

export function EducationCard({}) {
  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        width: 250,
        padding: 20,
        marginRight: 10,
      }}>
      <Text
        style={{
          color: '#7A7A7A',
        }}>
        Institute
      </Text>
      <Text
        style={{
          color: '#7A7A7A',
          marginVertical: 10,
        }}>
        2016 - 2020
      </Text>
      <Text
        style={{
          color: '#7A7A7A',
          fontSize: 12,
        }}>
        Degree
      </Text>
    </View>
  );
}
