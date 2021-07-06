import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
  Text,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
  FORTH,
  FIFTH,
} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';
import Slider from '@react-native-community/slider';

function UserCardStatus({status}) {
  if (status === 'open') {
    return (
      <View
        style={{
          width: 50,
          height: 25,
          borderTopLeftRadius: 8,
          borderTopEndRadius: 20,
          backgroundColor: '#00D563',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          zIndex: 3,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={10.244}
          height={11.708}
          viewBox="0 0 10.244 11.708">
          <Path
            data-name="Icon awesome-lock"
            d="M9.147 5.122H8.6V3.476a3.476 3.476 0 10-6.951 0v1.646H1.1A1.1 1.1 0 000 6.22v4.39a1.1 1.1 0 001.1 1.1h8.047a1.1 1.1 0 001.1-1.1V6.22a1.1 1.1 0 00-1.1-1.098zm-2.378 0H3.476V3.476a1.646 1.646 0 013.293 0z"
            fill="#fefefe"
          />
        </Svg>
      </View>
    );
  } else if (status === 'closed') {
    return (
      <View
        style={{
          width: 50,
          height: 25,
          borderTopLeftRadius: 8,
          borderTopEndRadius: 20,
          backgroundColor: '#D5000E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          zIndex: 3,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={10.244}
          height={11.708}
          viewBox="0 0 10.244 11.708">
          <Path
            data-name="Icon awesome-lock"
            d="M9.147 5.122H8.6V3.476a3.476 3.476 0 10-6.951 0v1.646H1.1A1.1 1.1 0 000 6.22v4.39a1.1 1.1 0 001.1 1.1h8.047a1.1 1.1 0 001.1-1.1V6.22a1.1 1.1 0 00-1.1-1.098zm-2.378 0H3.476V3.476a1.646 1.646 0 013.293 0z"
            fill="#fefefe"
          />
        </Svg>
      </View>
    );
  } else if (status === 'broadcasted') {
    return (
      <View
        style={{
          width: 50,
          height: 25,
          borderTopLeftRadius: 8,
          borderTopEndRadius: 20,
          backgroundColor: '#5500D5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 0,
          zIndex: 3,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={10.244}
          height={11.708}
          viewBox="0 0 10.244 11.708">
          <Path
            data-name="Icon awesome-lock"
            d="M9.147 5.122H8.6V3.476a3.476 3.476 0 10-6.951 0v1.646H1.1A1.1 1.1 0 000 6.22v4.39a1.1 1.1 0 001.1 1.1h8.047a1.1 1.1 0 001.1-1.1V6.22a1.1 1.1 0 00-1.1-1.098zm-2.378 0H3.476V3.476a1.646 1.646 0 013.293 0z"
            fill="#fefefe"
          />
        </Svg>
      </View>
    );
  }
}

export default function UserCard({cta, variant, favoritBtn}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
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
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        position: 'relative',
      }}>
      <UserCardStatus status={variant} />
      <Image
        source={require('../Assets/profilePic.png')}
        style={{width: 80, height: 80}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 14, color: SECONDARY}}>Umer Altaf</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: SECONDARY,
            marginBottom: 10,
          }}>
          Software Engineer
        </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>umer@gmail.com</Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>Lahore, Pakistan</Text>
      </View>
      {cta ? (
        <View
          style={{
            backgroundColor: WHITE,
            width: 40,
            height: 40,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            right: -15,
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
            width={13.855}
            height={13.855}
            viewBox="0 0 13.855 13.855">
            <Path
              data-name="Icon material-arrow_back"
              d="M0 7.793h10.538l-4.841 4.841 1.23 1.221 6.928-6.928L6.927-.001 5.706 1.22l4.832 4.842H0z"
              fill="#151269"
            />
          </Svg>
        </View>
      ) : null}
      {favoritBtn ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={13.125}
            viewBox="0 0 15 13.125">
            <Path
              data-name="Icon awesome-heart"
              d="M13.544.897a4.006 4.006 0 00-5.467.4l-.576.593-.577-.595a4.006 4.006 0 00-5.467-.4 4.207 4.207 0 00-.29 6.091l5.669 5.853a.918.918 0 001.327 0l5.668-5.851a4.2 4.2 0 00-.287-6.091z"
              fill="#aed8ec"
            />
          </Svg>
          <Text>20</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
