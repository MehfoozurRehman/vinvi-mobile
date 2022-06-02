import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {SECONDARY, FIFTH} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {JobCard} from './JobCard';

export function JobHistory({setEdit}) {
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
            Job History
          </Text>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={13.473}
            height={9.432}
            viewBox="0 0 13.473 9.432"
            style={{
              marginLeft: 10,
            }}>
            <Path
              data-name="Icon awesome-user-friends"
              d="M4.042 6.966a2.358 2.358 0 10-2.358-2.358 2.357 2.357 0 002.358 2.358zm1.617.674h-.175a3.255 3.255 0 01-2.884 0h-.175A2.426 2.426 0 000 10.065v.606a1.011 1.011 0 001.011 1.011h6.063a1.011 1.011 0 001.011-1.011v-.606a2.426 2.426 0 00-2.426-2.426zm4.446-.674a2.021 2.021 0 10-2.021-2.021 2.022 2.022 0 002.021 2.021zm1.011.674h-.08a2.655 2.655 0 01-1.861 0h-.08a2.338 2.338 0 00-1.173.324 3.081 3.081 0 01.836 2.1v.808c0 .046-.011.091-.013.135h3.718A1.011 1.011 0 0013.473 10a2.357 2.357 0 00-2.358-2.358z"
              transform="translate(0 -2.25)"
              fill="#151269"
              opacity={0.49}
            />
          </Svg>
        </View>
        <TouchableOpacity
          onPress={() => {
            setEdit(true);
          }}>
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
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
  );
}
