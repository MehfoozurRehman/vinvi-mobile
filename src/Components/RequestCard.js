import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function RequestCard({onPress, placeholder, image, btnText}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: SECONDARY,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 20,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={image}
          style={{width: 50, height: 50, marginRight: 10}}
        />
        <Text style={{color: SECONDARY}}>{placeholder}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: SECONDARY,
          padding: 10,
          borderRadius: 5,
        }}>
        <Text style={{fontSize: 12, color: WHITE}}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}
