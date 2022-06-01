import React from 'react';
import {View, Text} from 'react-native';

export function EducationCard({}) {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 5,
        marginRight: 10,
        minWidth: 250,
      }}>
      <Text
        style={{
          color: '#606060',
        }}>
        Institute
      </Text>
      <Text
        style={{
          color: '#606060',
        }}>
        2016 - 2020
      </Text>
      <Text
        style={{
          color: '#606060',
        }}>
        Degree
      </Text>
    </View>
  );
}
