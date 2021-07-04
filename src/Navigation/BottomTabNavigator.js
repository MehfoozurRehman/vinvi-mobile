import React, {Children} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DashboardScreen from '../Screens/HomeDashboardScreen';

import {SECONDARY, WHITE} from '../Constants/Colors';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Svg, {G, Path} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

import AddCardScreen from '../Screens/AddCardScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: WHITE,
          borderTopColor: SECONDARY,
          borderTopWidth: 1,
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 10,
          elevation: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={25.596}
                height={25.774}
                viewBox="0 0 21.596 23.774">
                <G
                  data-name="Icon feather-home"
                  fill={focused ? SECONDARY : '#A9D6EB'}
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}>
                  <Path
                    data-name="Path 2218"
                    d="M1 8.621L10.8 1l9.8 7.621V20.6a2.177 2.177 0 01-2.177 2.177H3.177A2.177 2.177 0 011 20.6z"
                  />
                  <Path
                    data-name="Path 2219"
                    d="M7.532 22.774V11.887h6.532v10.887"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={25.297}
                height={25.511}
                viewBox="0 0 24.297 21.511">
                <Path
                  data-name="Icon awesome-heart"
                  d="M21.132 2.337a5.955 5.955 0 00-8.13.592l-.858.884-.858-.884a5.954 5.954 0 00-8.125-.592 6.253 6.253 0 00-.431 9.053l8.426 8.7a1.365 1.365 0 001.973 0l8.426-8.7a6.249 6.249 0 00-.427-9.053z"
                  fill={focused ? SECONDARY : '#ffffff'}
                  stroke={focused ? SECONDARY : '#A9D6EB'}
                  strokeWidth={2}
                />
              </Svg>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddCard"
        component={AddCardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={22.047}
                height={22.047}
                viewBox="0 0 22.047 22.047">
                <Path
                  data-name="Icon ionic-ios-add"
                  d="M20.674 9.651h-8.278V1.372a1.373 1.373 0 00-2.745 0V9.65H1.372a1.373 1.373 0 000 2.745H9.65v8.278a1.373 1.373 0 002.745 0v-8.277h8.278a1.373 1.373 0 000-2.745z"
                  fill="#fff"
                />
              </Svg>
            );
          },
          tabBarButton: ({children, onPress, focused}) => {
            return (
              <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                <LinearGradient
                  colors={['#3b5998', '#192f6a']}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 60,
                    top: -30,
                  }}>
                  {children}
                </LinearGradient>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tab.Screen
        name="Messenger"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={23.223}
                height={23.223}
                viewBox="0 0 23.223 23.223">
                <Path
                  data-name="Icon feather-message-square"
                  d="M22.223 15.148a2.358 2.358 0 01-2.358 2.358H5.716L1 22.223V3.358A2.358 2.358 0 013.358 1h16.506a2.358 2.358 0 012.358 2.358z"
                  fill={focused ? SECONDARY : '#ffffff'}
                  stroke={focused ? SECONDARY : '#A9D6EB'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </Svg>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={25.93}
                height={22.491}
                viewBox="0 0 19.93 23.491">
                <G
                  data-name="user (3)"
                  fill={focused ? SECONDARY : '#ffffff'}
                  stroke={focused ? SECONDARY : '#A9D6EB'}
                  strokeWidth={2}>
                  <Path
                    data-name="Path 2220"
                    d="M9.829 11.352a5.008 5.008 0 003.66-1.516 5.008 5.008 0 001.516-3.66 5.009 5.009 0 00-1.516-3.66 5.175 5.175 0 00-7.319 0 5.009 5.009 0 00-1.516 3.66 5.008 5.008 0 001.517 3.66 5.01 5.01 0 003.658 1.516zm0 0"
                  />
                  <Path
                    data-name="Path 2221"
                    d="M18.886 17.526a12.786 12.786 0 00-.174-1.358 10.7 10.7 0 00-.334-1.365 6.744 6.744 0 00-.561-1.273 4.805 4.805 0 00-.846-1.1 3.732 3.732 0 00-1.216-.764 4.2 4.2 0 00-1.552-.281 1.575 1.575 0 00-.841.357c-.252.164-.547.355-.876.565a5.021 5.021 0 01-1.134.5 4.4 4.4 0 01-2.774 0 5.01 5.01 0 01-1.133-.5c-.326-.208-.621-.4-.877-.565a1.573 1.573 0 00-.841-.357 4.2 4.2 0 00-1.552.281 3.728 3.728 0 00-1.216.764 4.806 4.806 0 00-.846 1.1 6.758 6.758 0 00-.561 1.273 10.725 10.725 0 00-.335 1.362 12.74 12.74 0 00-.174 1.358c-.029.414-.043.842-.043 1.272a3.569 3.569 0 001.06 2.7 3.815 3.815 0 002.731 1h10.348a3.814 3.814 0 002.731-1 3.567 3.567 0 001.06-2.7c0-.433-.015-.86-.043-1.269zm0 0"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
