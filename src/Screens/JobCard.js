import React from 'react';
import {View, Text} from 'react-native';

export function JobCard({}) {
  return (
    <View
      style={{
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 5,
        marginRight: 10,
        width: 250,
      }}>
      <Text
        style={{
          color: '#606060',
        }}>
        Company Name
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
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century
      </Text>
    </View>
  );
}
