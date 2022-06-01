import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountDashboardScreen from '../Screens/AccountDashboardScreen';
import BottomTabsNavigator from '../Navigation/BottomTabNavigator';
import CustomSidebarMenu from './DrawerMenu';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import NotificationScreen from '../Screens/NotificationScreen';
import TermsConditionScreen from '../Screens/TermsConditionScreen';
import BroadCastScreen from '../Screens/BroadCastScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: SECONDARY,
        inactiveTintColor: WHITE,
        activeBackgroundColor: WHITE,
        inactiveBackgroundColor: 'transparent',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabsNavigator}
        options={{
          drawerLabel: () => null,
          title: null,
          drawerIcon: () => null,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={AccountDashboardScreen}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.462}
                height={21.832}
                viewBox="0 0 18.462 21.832">
                <G
                  data-name="user (3)"
                  fill="none"
                  stroke={focused ? SECONDARY : WHITE}
                  strokeWidth={1.5}>
                  <Path
                    data-name="Path 2220"
                    d="M9.103 10.544a4.738 4.738 0 003.462-1.435A4.738 4.738 0 0014 5.65a4.739 4.739 0 00-1.435-3.462 4.9 4.9 0 00-6.925 0A4.738 4.738 0 004.206 5.65a4.738 4.738 0 001.435 3.462 4.739 4.739 0 003.462 1.432zm0 0"
                  />
                  <Path
                    data-name="Path 2221"
                    d="M17.671 16.384a12.1 12.1 0 00-.165-1.285 10.123 10.123 0 00-.316-1.292 6.381 6.381 0 00-.531-1.2 4.546 4.546 0 00-.8-1.043 3.53 3.53 0 00-1.15-.723 3.976 3.976 0 00-1.468-.266 1.49 1.49 0 00-.8.338c-.239.156-.518.336-.829.535a4.75 4.75 0 01-1.073.473 4.166 4.166 0 01-2.624 0 4.739 4.739 0 01-1.072-.472c-.309-.2-.588-.377-.83-.535a1.488 1.488 0 00-.8-.338 3.97 3.97 0 00-1.463.261 3.527 3.527 0 00-1.15.723 4.547 4.547 0 00-.8 1.043 6.393 6.393 0 00-.531 1.2 10.146 10.146 0 00-.316 1.291 12.052 12.052 0 00-.163 1.291c-.027.389-.041.793-.041 1.2a3.376 3.376 0 001 2.554 3.609 3.609 0 002.584.943h9.79a3.609 3.609 0 002.584-.943 3.374 3.374 0 001-2.554c0-.41-.014-.814-.041-1.2zm0 0"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={19.628}
                height={24.002}
                viewBox="0 0 19.628 24.002">
                <G
                  data-name="Icon ionic-ios-notifications-outline"
                  fill={focused ? SECONDARY : WHITE}>
                  <Path
                    data-name="Path 2248"
                    d="M12.046 20.477a.862.862 0 00-.845.679 1.667 1.667 0 01-.333.725 1.257 1.257 0 01-1.071.392 1.278 1.278 0 01-1.071-.392 1.667 1.667 0 01-.333-.725.862.862 0 00-.845-.679.867.867 0 00-.845 1.058 2.972 2.972 0 003.093 2.468 2.967 2.967 0 003.093-2.468.871.871 0 00-.845-1.058z"
                  />
                  <Path
                    data-name="Path 2249"
                    d="M19.382 17.351c-.946-1.189-2.806-1.886-2.806-7.208 0-5.463-2.53-7.659-4.888-8.186-.221-.053-.381-.123-.381-.345v-.17A1.471 1.471 0 009.834 0h-.037a1.471 1.471 0 00-1.472 1.441v.17c0 .217-.16.293-.381.345-2.364.533-4.888 2.723-4.888 8.186 0 5.323-1.861 6.014-2.806 7.208a1.16 1.16 0 00.975 1.863h17.2a1.16 1.16 0 00.957-1.862zm-2.395.34H2.668a.256.256 0 01-.2-.427 7.061 7.061 0 001.289-1.956 12.719 12.719 0 00.878-5.165A8.657 8.657 0 015.916 5.06a3.949 3.949 0 012.376-1.616 2.178 2.178 0 001.142-.615.5.5 0 01.731-.012 2.254 2.254 0 001.154.627 3.949 3.949 0 012.377 1.616 8.657 8.657 0 011.283 5.083 12.719 12.719 0 00.878 5.165 7.145 7.145 0 001.32 1.985.241.241 0 01-.19.398z"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Broadcast"
        component={BroadCastScreen}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={21.263}
                height={17.011}
                viewBox="0 0 21.263 17.011">
                <Path
                  data-name="Icon awesome-broadcast-tower"
                  d="M5.015 6.379h1.12a.524.524 0 00.494-.7 4.16 4.16 0 010-2.845.523.523 0 00-.494-.7h-1.12A.53.53 0 004.5 2.5a6.263 6.263 0 000 3.506.53.53 0 00.515.373zM2.987.775A.526.526 0 002.524 0H1.35a.538.538 0 00-.49.309A9.491 9.491 0 000 4.253 9.259 9.259 0 00.887 8.2a.535.535 0 00.485.3H2.53a.526.526 0 00.463-.776A7.409 7.409 0 012.987.775zM20.4.309A.537.537 0 0019.912 0h-1.177a.525.525 0 00-.466.772 7.451 7.451 0 01.009 6.951.527.527 0 00.462.781h1.17a.537.537 0 00.49-.304 9.452 9.452 0 000-7.888zm-4.152 1.817h-1.12a.524.524 0 00-.494.7 4.16 4.16 0 010 2.845.523.523 0 00.494.7h1.121a.53.53 0 00.512-.373 6.262 6.262 0 000-3.506.529.529 0 00-.513-.366zm-3.863 3.327a2.125 2.125 0 10-3.506 0L4.543 15.865a.532.532 0 00.286.7l.98.409a.531.531 0 00.695-.286l1.634-3.925h4.986l1.635 3.925a.531.531 0 00.695.286l.98-.409a.532.532 0 00.286-.7L12.385 5.453zm-3.36 5.179l1.607-3.86 1.607 3.86H9.024z"
                  fill={focused ? SECONDARY : WHITE}
                />
              </Svg>
            );
          },
        }}
      />
      {/* <Drawer.Screen
        name="Chats"
        component={ChatsDashboardScreen}
        options={{
          drawerIcon: ({ focused }) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={19.263}
                height={19.263}
                viewBox="0 0 19.263 19.263">
                <Path
                  data-name="Icon material-chat_bubble_outline"
                  d="M17.337 0H1.926A1.932 1.932 0 000 1.926v17.337l3.853-3.853h13.484a1.932 1.932 0 001.926-1.926V1.926A1.932 1.932 0 0017.337 0zm0 13.484H3.853l-1.927 1.927V1.926h15.411z"
                  fill={focused ? SECONDARY : WHITE}
                />
              </Svg>
            );
          },
        }}
      /> */}
      <Drawer.Screen
        name="TermsConditions"
        component={TermsConditionScreen}
        options={{
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.814}
                height={20.551}
                viewBox="0 0 16.814 20.551">
                <Path
                  data-name="Icon material-content-paste"
                  d="M14.946 1.868h-3.9a2.791 2.791 0 00-5.269 0h-3.9A1.874 1.874 0 000 3.737v14.946a1.874 1.874 0 001.868 1.868h13.078a1.874 1.874 0 001.868-1.868V3.737a1.874 1.874 0 00-1.868-1.869zm-6.539 0a.934.934 0 11-.934.934.937.937 0 01.934-.934zm6.539 16.815H1.868V3.737h1.869v2.8h9.341v-2.8h1.868z"
                  fill={focused ? SECONDARY : WHITE}
                />
              </Svg>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}
