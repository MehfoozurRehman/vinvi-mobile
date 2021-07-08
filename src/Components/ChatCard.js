import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SECONDARY, LIGHT_TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function ChatCard({
  name,
  picture,
  lastMessage,
  timeStamp,
  badgeValue,
  navigation,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Messages');
      }}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 20,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image source={picture} style={{width: 55, height: 55}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 16, color: '#3C50FF'}}>{lastMessage}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{fontSize: 16, color: LIGHT_TEXT_COLOR, marginBottom: 5}}>
          {timeStamp}
        </Text>
        <View
          style={{
            backgroundColor: SECONDARY,
            width: 22,
            height: 22,
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: WHITE}}>{badgeValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
