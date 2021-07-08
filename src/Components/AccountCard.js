import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import {USER_NAME} from '../Constants/Constants';

export default function AccountCard() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
        marginHorizontal: 20,
      }}>
      <Image source={require('../Assets/profilePic.png')} />
      <View style={{marginLeft: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{USER_NAME}</Text>
        <Text style={{fontSize: 16}}>{USER_NAME}</Text>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 5,
          borderWidth: 1,
          borderColor: SECONDARY,
          position: 'absolute',
          top: -10,
          right: -15,
          backgroundColor: WHITE,
          padding: 10,
        }}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
