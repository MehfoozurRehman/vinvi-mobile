import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SECONDARY, FIFTH} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {EducationCard} from './EducationCard';

export function Education({}) {
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={23.11}
            height={18.864}
            style={{
              marginRight: 10,
            }}
            viewBox="0 0 23.11 18.864">
            <G data-name="Group 597" fill="#151269">
              <Path
                data-name="Path 2227"
                d="M57.77 206.547a3.007 3.007 0 01-2.967 0l-6.715-4.118s-.606-.372-.606.47v4.113c0 2.166 3.942 4.5 8.8 4.5s8.8-2.335 8.8-4.5v-4.344c0-.676-.431-.345-.431-.345z"
                transform="translate(-44.732 -192.649)"
              />
              <Path
                data-name="Path 2228"
                d="M22.723 43.151a.621.621 0 000-1.151l-10.23-5.116a1.973 1.973 0 00-1.876 0L.387 42a.621.621 0 000 1.151l10.23 6.274a1.973 1.973 0 001.876 0"
                transform="translate(0 -36.648)"
              />
              <Path
                data-name="Path 2229"
                d="M357.508 192.847v-6.929s0-.328-.19-.22a5.664 5.664 0 00-.674.418.582.582 0 00-.121.439v6.292a.185.185 0 01-.113.153 1.2 1.2 0 101.207 0 .178.178 0 01-.109-.153z"
                transform="translate(-335.209 -177.044)"
              />
            </G>
          </Svg>
          <Text
            style={{
              fontSize: 18,
              color: SECONDARY,
            }}>
            Education
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={11.698}
            height={11.698}
            style={{
              marginLeft: 10,
            }}
            viewBox="0 0 11.698 11.698">
            <Path
              data-name="Icon material-public"
              d="M8.849 3A5.849 5.849 0 1014.7 8.849 5.851 5.851 0 008.849 3zm-.585 10.487A4.672 4.672 0 014.17 8.849 4.748 4.748 0 014.293 7.8l2.8 2.8v.585a1.173 1.173 0 001.17 1.17zM12.3 12a1.16 1.16 0 00-1.111-.813H10.6V9.434a.587.587 0 00-.585-.585H6.509v-1.17h1.17a.587.587 0 00.585-.585v-1.17h1.17a1.173 1.173 0 001.17-1.17v-.24A4.669 4.669 0 0112.3 12z"
              transform="translate(-3 -3)"
              fill="#151269"
              opacity={0.49}
            />
          </Svg>
        </View>
        <TouchableOpacity>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={21.004}
            height={21.009}
            viewBox="0 0 21.004 21.009">
            <Path
              data-name="Icon ionic-ios-settings"
              d="M23.77 15a2.7 2.7 0 011.73-2.52 10.713 10.713 0 00-1.3-3.123 2.739 2.739 0 01-1.1.235 2.7 2.7 0 01-2.467-3.8 10.681 10.681 0 00-3.118-1.3 2.7 2.7 0 01-5.043 0A10.713 10.713 0 009.357 5.8 2.7 2.7 0 016.89 9.6a2.65 2.65 0 01-1.1-.235 10.95 10.95 0 00-1.29 3.121 2.7 2.7 0 01.005 5.043 10.713 10.713 0 001.3 3.123 2.7 2.7 0 013.561 3.561 10.776 10.776 0 003.123 1.3 2.7 2.7 0 015.032 0 10.713 10.713 0 003.123-1.3 2.7 2.7 0 013.556-3.561 10.776 10.776 0 001.3-3.123A2.716 2.716 0 0123.77 15zm-8.719 4.37A4.376 4.376 0 1119.427 15a4.375 4.375 0 01-4.376 4.372z"
              transform="translate(-4.5 -4.5)"
              fill="#113066"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </ScrollView>
    </View>
  );
}
