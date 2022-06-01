import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function RequestsCard({item}) {
  return (
    <View
      activeOpacity={0.9}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: WHITE,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        position: 'relative',
      }}>
      <Image
        source={require('../Assets/profilePic.png')}
        style={{width: 80, height: 80}}
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.name}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: SECONDARY,
          }}>
          {item.occupation}
          USER_DESIGNATION
        </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.email} </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.address}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#A2A2A2',
              height: 35,
              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text style={{color: '#ffffff'}}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#7EBDDB',
              height: 35,
              paddingHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text style={{color: '#ffffff'}}>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
