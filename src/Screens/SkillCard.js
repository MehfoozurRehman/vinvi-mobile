import React from 'react';
import {View, Text} from 'react-native';

export function SkillCard({}) {
  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        padding: 20,
        marginRight: 10,
      }}>
      <Text
        style={{
          color: '#7A7A7A',
        }}>
        Skill name
      </Text>
    </View>
  );
}
