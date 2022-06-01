import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {PRIMARY, PRIMARY1, SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';

export default function MyCardIndividual({
  cta,
  item,
  index,
  selected,
  setSelected,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(index);
      }}
      activeOpacity={0.9}
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: selected === index ? '#3F4D87' : WHITE,
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
      <View style={{marginLeft: 10}}>
        <Text
          style={{fontSize: 14, color: selected === index ? WHITE : SECONDARY}}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: selected === index ? WHITE : SECONDARY,
            marginBottom: 10,
          }}>
          {item.occupation}
          user designation
        </Text>
        <Text
          style={{fontSize: 14, color: selected === index ? WHITE : SECONDARY}}>
          {item.email}{' '}
        </Text>
        <Text
          style={{fontSize: 14, color: selected === index ? WHITE : SECONDARY}}>
          {item.address}
        </Text>
      </View>
      {selected === index ? (
        <View
          style={{
            backgroundColor: WHITE,
            width: 30,
            height: 30,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '55%',
            right: 15,
            shadowColor: '#000',
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17.428}
            height={12.686}
            viewBox="0 0 17.428 12.686">
            <Path
              data-name="Icon feather-check"
              d="M15.307 2.121l-9.065 9.065-4.121-4.12"
              fill="none"
              stroke="#3f4d87"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
            />
          </Svg>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
