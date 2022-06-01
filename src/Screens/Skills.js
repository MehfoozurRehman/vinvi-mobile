import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {SECONDARY, FIFTH} from '../Constants/Colors';
import SkillTag from '../Components/SkillTag';

export function Skills({}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: FIFTH,
        paddingVertical: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        marginTop: 20,
      }}>
      <Text
        style={{
          fontSize: 18,
          color: SECONDARY,
          marginBottom: 20,
        }}>
        Skills
      </Text>
      <ScrollView horizontal={true}>
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
        <SkillTag placeholder="Skill Name" />
      </ScrollView>
    </View>
  );
}
