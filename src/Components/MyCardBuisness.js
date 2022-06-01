import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {PRIMARY, SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';

export default function MyCardBuisness({item, selected, index, setSelected}) {
  return (
    <View
      style={{
        backgroundColor: selected === index ? PRIMARY : WHITE,
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
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        height: 130,
      }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={76.449}
        height={66}
        viewBox="0 0 76.449 66">
        <Path
          data-name="Icon awesome-building"
          d="M41.058 45.2h-1.883V2.26A2.26 2.26 0 0036.915 0H5.274a2.26 2.26 0 00-2.26 2.26V45.2H1.13A1.13 1.13 0 000 46.332v1.883h42.188v-1.883a1.13 1.13 0 00-1.13-1.132zm-29-38.045a1.13 1.13 0 011.13-1.13h3.767a1.13 1.13 0 011.13 1.13v3.767a1.13 1.13 0 01-1.13 1.13h-3.771a1.13 1.13 0 01-1.13-1.13zm0 9.04a1.13 1.13 0 011.13-1.13h3.767a1.13 1.13 0 011.13 1.13v3.767a1.13 1.13 0 01-1.13 1.13h-3.771a1.13 1.13 0 01-1.13-1.13zm4.9 13.937h-3.774A1.13 1.13 0 0112.054 29v-3.762a1.13 1.13 0 011.13-1.13h3.767a1.13 1.13 0 011.13 1.13V29a1.13 1.13 0 01-1.13 1.134zM24.107 45.2h-6.026v-7.91a1.13 1.13 0 011.13-1.13h3.767a1.13 1.13 0 011.13 1.13zM30.134 29A1.13 1.13 0 0129 30.134h-3.762A1.13 1.13 0 0124.107 29v-3.762a1.13 1.13 0 011.13-1.13H29a1.13 1.13 0 011.13 1.13zm0-9.04A1.13 1.13 0 0129 21.094h-3.762a1.13 1.13 0 01-1.13-1.13V16.2a1.13 1.13 0 011.13-1.13H29a1.13 1.13 0 011.13 1.13zm0-9.04A1.13 1.13 0 0129 12.054h-3.762a1.13 1.13 0 01-1.13-1.13V7.157a1.13 1.13 0 011.13-1.13H29a1.13 1.13 0 011.13 1.13z"
          transform="translate(0 17.785)"
          fill={selected === index ? '#4D5A9F' : '#efefef'}
        />
        <Path
          data-name="Icon awesome-building"
          d="M56.2 61.875h-2.575V3.094A3.094 3.094 0 0050.531 0H7.219a3.094 3.094 0 00-3.094 3.094v58.781H1.547A1.547 1.547 0 000 63.422V66h57.75v-2.578a1.547 1.547 0 00-1.55-1.547zM16.5 9.8a1.547 1.547 0 011.547-1.55H23.2a1.547 1.547 0 011.55 1.55v5.156A1.547 1.547 0 0123.2 16.5h-5.153a1.547 1.547 0 01-1.547-1.547zm0 12.375a1.547 1.547 0 011.547-1.547H23.2a1.547 1.547 0 011.547 1.547v5.156a1.547 1.547 0 01-1.547 1.544h-5.153a1.547 1.547 0 01-1.547-1.547zm6.7 19.075h-5.153A1.547 1.547 0 0116.5 39.7v-5.153A1.547 1.547 0 0118.047 33H23.2a1.547 1.547 0 011.547 1.547V39.7a1.547 1.547 0 01-1.547 1.55zM33 61.875h-8.25V51.047A1.547 1.547 0 0126.3 49.5h5.156A1.547 1.547 0 0133 51.047zM41.25 39.7a1.547 1.547 0 01-1.55 1.55h-5.153A1.547 1.547 0 0133 39.7v-5.153A1.547 1.547 0 0134.547 33H39.7a1.547 1.547 0 011.547 1.547zm0-12.375a1.547 1.547 0 01-1.55 1.55h-5.153A1.547 1.547 0 0133 27.328v-5.156a1.547 1.547 0 011.547-1.547H39.7a1.547 1.547 0 011.547 1.547zm0-12.375a1.547 1.547 0 01-1.55 1.55h-5.153A1.547 1.547 0 0133 14.953V9.8a1.547 1.547 0 011.547-1.55H39.7a1.547 1.547 0 011.55 1.55z"
          transform="translate(18.699)"
          fill={selected === index ? '#4D5A9F' : '#dcdee8'}
        />
      </Svg>
      <TouchableOpacity
        onPress={() => {
          setSelected(index);
        }}
        activeOpacity={0.9}
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 20,
          backgroundColor: 'transparent',
          position: 'absolute',
          width: '100%',
        }}>
        <Image
          source={require('../Assets/profilePic.png')}
          style={{width: 80, height: 80}}
        />
        <View style={{marginLeft: 10}}>
          <Text
            style={{
              fontSize: 14,
              color: selected === index ? WHITE : SECONDARY,
            }}>
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
            designation
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: selected === index ? WHITE : SECONDARY,
            }}>
            {item.email}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: selected === index ? WHITE : SECONDARY,
            }}>
            {item.address}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
