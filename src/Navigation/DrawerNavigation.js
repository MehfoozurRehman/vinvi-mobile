import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AccountDashboardScreen from '../Screens/AccountDashboardScreen';
import BottomTabsNavigator from '../Navigation/BottomTabNavigator';
import CustomSidebarMenu from './DrawerMenu';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {Circle, G, Path} from 'react-native-svg';
import NotificationScreen from '../Screens/NotificationScreen';
import TermsConditionScreen from '../Screens/TermsConditionScreen';
import BroadCastScreen from '../Screens/BroadCastScreen';
import MyCardsDashboardScreen from '../Screens/MyCardsDashboardScreen';
import RequestsDashboardScreen from '../Screens/RequestsDashboardScreen';
import ChatsDashboardScreen from '../Screens/ChatsDashboardScreen';

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
          drawerIcon: ({focused}) => {
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
        name="MyCard"
        component={MyCardsDashboardScreen}
        options={{
          drawerLabel: 'My Card',
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={23.875}
                height={15.417}
                viewBox="0 0 23.875 15.417">
                <G data-name="Group 634" fill="#fff">
                  <Path
                    data-name="Path 2281"
                    d="M727.953 271.965c0-1.608-.661-2.26-2.257-2.261q-9.43-.005-18.86 0c-1.594 0-2.245.652-2.25 2.268q-.015 5.191 0 10.382c0 1.608.661 2.259 2.257 2.261q4.715.008 9.43 0t9.43 0c1.594 0 2.245-.652 2.25-2.268q.015-5.191 0-10.382zm-.744 10.454c0 1.121-.375 1.49-1.513 1.49q-9.431.006-18.861 0c-1.132 0-1.5-.372-1.5-1.5q-.008-5.278 0-10.555c0-1.066.387-1.444 1.469-1.446 3.172-.007 6.345 0 9.517 0h9.344c1.19 0 1.547.358 1.548 1.542q.002 5.235-.005 10.469z"
                    stroke={focused ? SECONDARY : WHITE}
                    strokeWidth={0.5}
                    transform="translate(-704.334 -269.451)"
                  />
                  <Path
                    data-name="Path 2282"
                    d="M783.99 291.9c-1.095 0-2.19.021-3.283-.019-.212-.008-.416-.258-.623-.4.2-.117.4-.333.6-.335q3.327-.035 6.654 0c.2 0 .4.231.593.354-.22.131-.436.367-.661.375-1.09.046-2.186.025-3.28.025z"
                    transform="translate(-704.334 -269.451) translate(-62.425 -17.718)"
                  />
                  <Path
                    data-name="Path 2283"
                    d="M783.983 330.707c-1.095 0-2.19.023-3.284-.019-.209-.008-.408-.267-.612-.411.2-.112.409-.319.615-.322q3.327-.036 6.655 0c.195 0 .387.241.581.369-.195.127-.386.357-.585.363-1.122.037-2.246.019-3.37.02z"
                    transform="translate(-704.334 -269.451) translate(-62.43 -49.802)"
                  />
                  <Path
                    data-name="Path 2284"
                    d="M783.96 304.084c1.068 0 2.137-.024 3.2.018.253.01.5.241.746.37-.23.12-.46.341-.692.343q-3.247.039-6.5 0c-.222 0-.441-.242-.662-.371.232-.115.46-.322.695-.33 1.067-.036 2.136-.016 3.2-.016z"
                    transform="translate(-704.334 -269.451) translate(-62.407 -28.421)"
                  />
                  <Path
                    data-name="Path 2285"
                    d="M783.989 317.064c1.091 0 2.184-.021 3.274.016.23.008.452.23.678.354-.223.125-.444.357-.668.359q-3.274.035-6.548-.013c-.211 0-.418-.25-.628-.383.206-.111.409-.311.619-.317 1.09-.032 2.184-.015 3.273-.016z"
                    transform="translate(-704.334 -269.451) translate(-62.437 -39.154)"
                  />
                  <Path
                    data-name="Path 2286"
                    d="M713.078 276.341c.894-1.411.886-2.538-.005-3.366a1.821 1.821 0 00-2.4-.074c-.951.78-.984 1.873-.095 3.471-2.021 1.254-2.461 3.247-2.579 5.458h7.654c-.117-2.237-.528-4.248-2.575-5.489zm-2.551-1.734a1.394 1.394 0 011.32-1.509 1.441 1.441 0 011.316 1.464 1.5 1.5 0 01-1.309 1.56 1.413 1.413 0 01-1.327-1.518zm-.548 3.033a2.415 2.415 0 013.968.263 5.729 5.729 0 011.044 3.312h-6.327a5.433 5.433 0 011.315-3.575z"
                    stroke={focused ? SECONDARY : WHITE}
                    strokeWidth={0.5}
                    transform="translate(-704.334 -269.451)"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Requests"
        component={RequestsDashboardScreen}
        options={{
          drawerLabel: 'Requests',
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                viewBox="0 0 19 19">
                <G
                  transform="translate(-2 -2)"
                  fill="none"
                  stroke={focused ? SECONDARY : WHITE}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}>
                  <Circle
                    data-name="Ellipse 313"
                    cx={3}
                    cy={3}
                    r={3}
                    transform="translate(14 14)"
                  />
                  <Circle
                    data-name="Ellipse 314"
                    cx={3}
                    cy={3}
                    r={3}
                    transform="translate(3 3)"
                  />
                  <Path
                    data-name="Path 2291"
                    d="M12.586 5.876h2.876a1.917 1.917 0 011.917 1.917v6.71"
                  />
                  <Path
                    data-name="Line 19"
                    transform="translate(6 9)"
                    d="M0 0L0 11"
                  />
                </G>
              </Svg>
            );
          },
        }}
      />
      <Drawer.Screen
        name="VideoWall"
        component={TermsConditionScreen}
        options={{
          drawerLabel: 'Video Wall',
          drawerIcon: ({focused}) => {
            return (
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={23.067}
                height={18.873}
                viewBox="0 0 23.067 18.873">
                <Path
                  data-name="Icon material-ondemand-video"
                  d="M22.47 4.5H3.6a2.09 2.09 0 00-2.1 2.1v12.579a2.1 2.1 0 002.1 2.1h5.239v2.1h8.388v-2.1h5.243a2.094 2.094 0 002.087-2.1l.01-12.579a2.1 2.1 0 00-2.097-2.1zm0 14.679H3.6V6.6h18.87zm-5.242-6.291l-7.34 4.194V8.694z"
                  transform="translate(-1.5 -4.5)"
                  fill={focused ? SECONDARY : WHITE}
                />
              </Svg>
            );
          },
        }}
      />
      <Drawer.Screen
        name="TermsConditions"
        component={TermsConditionScreen}
        options={{
          drawerLabel: 'Terms & Conditions',
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
