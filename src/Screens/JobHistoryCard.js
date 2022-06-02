import React from 'react';
import {View, Text} from 'react-native';

export function JobHistoryCard({}) {
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
        Company Name
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
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown typesetter in the 15th century who is thought to have
        scrambled parts of Cicero's De Finibus Bonorum et
      </Text>
    </View>
  );
}
