import React from 'react';
import {View, ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import {SECONDARY} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';
import AccountCard from '../Components/AccountCard';
import LinkButton from '../Components/LinkButton';

const AccountDashboardScreen = props => {
  const navigation = props.navigation;
  return (
    <SafeAreaView
      style={{
        height: Height,
        width: Width,
      }}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{
          flex: 1,
        }}>
        <Header
          navigation={navigation}
          variant="dark2"
          headerName="Profile"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={17.994}
              height={21.31}
              viewBox="0 0 17.994 21.31">
              <Path
                data-name="Icon zocial-guest"
                d="M-.003 16.385a6.042 6.042 0 01.284-1.516 9.021 9.021 0 012.048-3.742 8.9 8.9 0 013.492-2.438 4.664 4.664 0 01-1.867-3.812 4.612 4.612 0 011.48-3.457 5.062 5.062 0 017.032 0 4.612 4.612 0 011.48 3.457 4.685 4.685 0 01-1.823 3.788 9.269 9.269 0 014.19 3.006 7.331 7.331 0 011.684 4.689q0 2.179-1.728 2.511a2.71 2.71 0 01-.308.616 1.478 1.478 0 01-.556.675 3.515 3.515 0 01-1.148.485c-.49.126-.88.221-1.172.283s-.738.135-1.339.214-.908.118-.923.118a1.01 1.01 0 00-.166.023 1.07 1.07 0 01-.164.025H7.647a15.379 15.379 0 01-3.05-.391q-1.847-.39-2.107-1.054a2.437 2.437 0 01-.593-.994 1.984 1.984 0 01-.994-.5q-.906-.353-.906-1.986z"
                fill="#fff"
              />
            </Svg>
          }
        />
        <AccountCard />
        <ScrollView
          style={{
            flex: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 10,
              marginBottom: 20,
            }}>
            <LinkButton
              placeholder="Change Password"
              onPress={() => {
                navigation.navigate('ChangePassowrd');
              }}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.649}
                  height={29.17}
                  viewBox="0 0 21.649 29.17">
                  <Path
                    data-name="Path 1404"
                    d="M19.37 11.224V8.546a8.546 8.546 0 10-17.092 0v2.678A2.853 2.853 0 000 14.015v3.234a.57.57 0 101.139 0v-3.234a1.711 1.711 0 011.709-1.709H18.8a1.711 1.711 0 011.709 1.709v12.306a1.712 1.712 0 01-1.139 1.611V24.5a.57.57 0 00-1.139 0v3.53H2.849a1.711 1.711 0 01-1.709-1.709v-4.5A.57.57 0 000 21.82v4.5a2.852 2.852 0 002.849 2.85H18.8a2.852 2.852 0 002.849-2.849V14.015a2.853 2.853 0 00-2.279-2.791zm-12.875-.057V8.546a4.33 4.33 0 118.66 0v2.621zm9.8 0V8.546a5.47 5.47 0 10-10.939 0v2.621H3.418V8.546a7.406 7.406 0 1114.813 0v2.621zm0 0"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 1405"
                    d="M.57 20.081a.569.569 0 10-.57-.57.57.57 0 00.57.57zm0 0"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 1406"
                    d="M10.827 26.093a1.711 1.711 0 001.709-1.709v-3.025a3.076 3.076 0 10-3.418-.01v3.035a1.711 1.711 0 001.709 1.709zm-1.93-7.3a1.937 1.937 0 112.811 1.728.57.57 0 00-.312.508v3.352a.57.57 0 11-1.139 0v-3.359a.57.57 0 00-.309-.506 1.931 1.931 0 01-1.053-1.721zm0 0"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 1407"
                    d="M18.801 22.732a.57.57 0 10-.4-.167.573.573 0 00.4.167zm0 0"
                    fill={SECONDARY}
                  />
                </Svg>
              }
            />
            <LinkButton
              placeholder="Terms & Conditions"
              onPress={() => {
                navigation.navigate('TermsConditions');
              }}
              svg={
                <Svg
                  data-name={3745341}
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.44}
                  height={25.947}
                  viewBox="0 0 20.44 25.947">
                  <Path
                    data-name="Path 2184"
                    d="M0 0v25.947h15.13l5.31-5.31V0zm1.52 1.52h17.4v17.72h-5.186v5.186H1.52V1.52zm16.646 19.241l-2.912 2.912v-2.912z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2185"
                    d="M6.977 4.645h6.487v1.52H6.977z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2186"
                    d="M4.004 8.429h12.433v1.52H4.004z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2187"
                    d="M4.004 11.673h12.433v1.52H4.004z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2188"
                    d="M4.004 14.916h12.433v1.52H4.004z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2189"
                    d="M4.004 19.241h1.6v1.52h-1.6z"
                    fill={SECONDARY}
                  />
                  <Path
                    data-name="Path 2190"
                    d="M7.12 19.241h3.1v1.52h-3.1z"
                    fill={SECONDARY}
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 10,
            }}>
            <LinkButton
              placeholder="Privacy Policy"
              onPress={() => {
                navigation.navigate('TermsConditions');
              }}
              svg={
                <Svg
                  data-name={4252491}
                  xmlns="http://www.w3.org/2000/svg"
                  width={26.404}
                  height={27.64}
                  viewBox="0 0 26.404 27.64">
                  <G data-name="Group 87" fill={SECONDARY}>
                    <Path
                      data-name="Path 2191"
                      d="M7.374 12.779h2.319a.405.405 0 000-.81H7.374a.405.405 0 000 .81z"
                    />
                    <Path
                      data-name="Path 2192"
                      d="M7.374 14.741h9.419a.405.405 0 000-.81H7.374a.405.405 0 100 .81z"
                    />
                    <Path
                      data-name="Path 2193"
                      d="M16.793 15.894h-2.516a.405.405 0 100 .81h2.511a.405.405 0 100-.81z"
                    />
                    <Path
                      data-name="Path 2194"
                      d="M25.881 2.719L20.64.1a.949.949 0 00-.845 0l-5.243 2.619a.94.94 0 00-.522.845v.753H8.343a.405.405 0 100 .81h5.69v1.231a10.314 10.314 0 00.133 1.687H7.374a.405.405 0 000 .81h6.965a7.92 7.92 0 00.4 1.152H7.374a.405.405 0 000 .81h7.778a7.964 7.964 0 00.468.706q.168.226.355.447h-4.663a.405.405 0 100 .81h5.44a18.06 18.06 0 002.974 2.188.943.943 0 00.988 0l.123-.076v9.832H10.242v-.755a.405.405 0 00-.81 0V26.7a.135.135 0 01-.135.135H.945A.135.135 0 01.81 26.7v-5.837a.135.135 0 01.135-.135h8.352a.135.135 0 01.135.135v1.217a.405.405 0 00.81 0v-1.217a.94.94 0 00-.031-.235h6.581a.405.405 0 000-.81H8.941v-1.152h7.851a.405.405 0 100-.81H8.924a3.79 3.79 0 00-.293-1.152h4.193a.405.405 0 000-.81H8.152a3.813 3.813 0 00-4.825-1.058V5.127h3.125a.405.405 0 000-.81H3.196a.676.676 0 00-.675.675v10.422a3.809 3.809 0 00-1.22 2.8v1.709H.945a.946.946 0 00-.945.945V26.7a.946.946 0 00.945.945h8.352a.946.946 0 00.945-.945v-1.166H20.97a.676.676 0 00.675-.675V14.371a12.335 12.335 0 003.169-2.849 8.354 8.354 0 001.59-5.165V3.564a.939.939 0 00-.522-.845zm-19.37 17.2H3.73V18.21a1.391 1.391 0 012.781 0v1.709zm-4.4-1.709a3.01 3.01 0 116.02 0v1.709h-.81V18.21a2.2 2.2 0 00-4.4 0v1.709h-.81zM25.594 6.358c0 3.891-2.03 5.915-5.3 7.918a.138.138 0 01-.143 0c-3.275-2-5.3-4.028-5.3-7.918V3.564a.134.134 0 01.075-.121L20.158.824a.135.135 0 01.121 0l5.241 2.619a.134.134 0 01.075.121v2.794z"
                    />
                    <Path
                      data-name="Path 2195"
                      d="M20.194 2.814a4.1 4.1 0 103.86 5.473.405.405 0 00-.763-.272 3.289 3.289 0 11.139-1.683.406.406 0 00.8-.142 4.089 4.089 0 00-4.033-3.377z"
                    />
                    <Path
                      data-name="Path 2196"
                      d="M21.598 5.804l-1.6 1.6-.928-.928a.405.405 0 10-.573.573l1.214 1.214a.4.4 0 00.573 0l1.887-1.884a.405.405 0 00-.573-.573z"
                    />
                  </G>
                </Svg>
              }
            />
            <LinkButton
              placeholder="Contact Us"
              onPress={() => {
                navigation.navigate('TermsConditions');
              }}
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19.603}
                  height={21.67}
                  viewBox="0 0 19.603 21.67">
                  <Path
                    data-name="Icon material-perm-contact-calendar"
                    d="M17.036 2.567H16V.5h-2.064v2.067H5.668V.5H3.6v2.067H2.567A2.066 2.066 0 00.5 4.634V19.1a2.066 2.066 0 002.067 2.07h14.469A2.073 2.073 0 0019.1 19.1V4.634a2.073 2.073 0 00-2.064-2.067zM9.8 5.668a3.1 3.1 0 11-3.1 3.1 3.1 3.1 0 013.1-3.1zM16 18.07H3.6v-1.034c0-2.067 4.134-3.2 6.2-3.2s6.2 1.137 6.2 3.2z"
                    fill="none"
                    stroke={SECONDARY}
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 30,
            }}>
            <BtnComponent
              placeholder="Logout"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AccountDashboardScreen;
