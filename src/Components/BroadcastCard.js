import React from 'react';
import {View, Text, Image} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';
import {USER_DESIGNATION, USER_EMAIL, USER_NAME} from '../Constants/Constants';

export default function BroadcastCard({status}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
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
        margin: 20,
        borderRadius: 8,
        position: 'relative',
      }}>
      <Image
        source={require('../Assets/profilePic.png')}
        style={{width: 80, height: 80}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 14, color: SECONDARY}}>{USER_NAME}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: SECONDARY,
            marginBottom: 10,
          }}>
          {USER_DESIGNATION}
        </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{USER_EMAIL}</Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>Lahore, Pakistan</Text>
      </View>
      {status ? (
        <View
          style={{
            backgroundColor: '#00C448',
            width: 40,
            height: 40,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -15,
            right: -15,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15.272}
            height={16.517}
            viewBox="0 0 21.272 16.517">
            <Path
              data-name="check (2)"
              d="M8.145 16.199a1.086 1.086 0 01-1.536 0L.477 10.066a1.628 1.628 0 010-2.3l.768-.772a1.629 1.629 0 012.3 0l3.829 3.829L17.723.477a1.629 1.629 0 012.3 0l.768.768a1.628 1.628 0 010 2.3zm0 0"
              fill="#fff"
            />
          </Svg>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: '#eeeeee',
            width: 40,
            height: 40,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -15,
            right: -15,
          }}></View>
      )}
    </View>
  );
}
