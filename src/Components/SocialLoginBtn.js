import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function SocialLoginBtn() {
  return (
    <View style={{display: 'flex', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 45,
          backgroundColor: '#F82929',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Svg
          data-name="g+"
          xmlns="http://www.w3.org/2000/svg"
          width={19.039}
          height={19.039}
          viewBox="0 0 19.039 19.039">
          <G fill="#fff">
            <Path
              data-name="Path 2116"
              d="M18.32 7.864h-7.766a.621.621 0 00-.621.621v2.481a.621.621 0 00.621.621h4.373a5.838 5.838 0 01-2.513 2.945l1.865 3.228a9.334 9.334 0 004.76-8.163 6.294 6.294 0 00-.107-1.219.624.624 0 00-.612-.514z"
            />
            <Path
              data-name="Path 2117"
              d="M9.52 15.314a5.793 5.793 0 01-5.012-2.9l-3.228 1.86a9.512 9.512 0 0013 3.489l-1.865-3.228a5.75 5.75 0 01-2.895.779z"
            />
            <Path
              data-name="Path 2118"
              d="M14.279 17.763l-1.865-3.228a5.751 5.751 0 01-2.895.783v3.725a9.5 9.5 0 004.76-1.28z"
            />
            <Path
              data-name="Path 2119"
              d="M3.725 9.519a5.751 5.751 0 01.782-2.895l-3.228-1.86a9.476 9.476 0 000 9.51l3.228-1.86a5.751 5.751 0 01-.782-2.895z"
            />
            <Path
              data-name="Path 2120"
              d="M9.52 3.725a5.768 5.768 0 013.679 1.321.618.618 0 00.832-.037l1.758-1.758a.626.626 0 00-.036-.915A9.5 9.5 0 001.28 4.764l3.228 1.861a5.793 5.793 0 015.012-2.9z"
            />
            <Path
              data-name="Path 2121"
              d="M13.198 5.046a.618.618 0 00.832-.037l1.758-1.758a.625.625 0 00-.036-.915A9.491 9.491 0 009.519 0v3.725a5.768 5.768 0 013.679 1.321z"
            />
          </G>
        </Svg>
        <Text style={{fontSize: 14, color: WHITE, marginLeft: 15}}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 45,
          backgroundColor: '#2C8FE5',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          marginVertical: 10,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={11.316}
          height={23.941}
          viewBox="0 0 11.316 23.941">
          <Path
            data-name={2111392}
            d="M9.25 3.975h2.063V.169A25.234 25.234 0 008.306 0C5.327 0 3.287 1.982 3.287 5.625v3.353H0v4.255h3.287v10.708h4.026V13.234h3.154l.5-4.255H7.313V6.047c0-1.23.317-2.072 1.937-2.072z"
            fill="#fff"
          />
        </Svg>
        <Text style={{fontSize: 14, color: WHITE, marginLeft: 20}}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '80%',
          height: 45,
          backgroundColor: '#4E4E4E',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={21.352}
          height={21.397}
          viewBox="0 0 21.352 21.397">
          <G data-name="Group 143">
            <Path
              data-name="Path 2122"
              d="M20.792 15.7l-2.986-2.986a1.986 1.986 0 00-3.306.747 2.032 2.032 0 01-2.346 1.28A9.208 9.208 0 016.609 9.2a1.933 1.933 0 011.28-2.346 1.986 1.986 0 00.747-3.306L5.649.56a2.13 2.13 0 00-2.879 0L.743 2.586c-2.026 2.133.213 7.785 5.226 12.8s10.664 7.358 12.8 5.226l2.026-2.026a2.13 2.13 0 00-.003-2.886z"
              fill="#fff"
            />
          </G>
        </Svg>
        <Text style={{fontSize: 14, color: WHITE, marginLeft: 15}}>
          Continue with Phone
        </Text>
      </TouchableOpacity>
    </View>
  );
}
