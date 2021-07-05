import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
  FORTH,
  FIFTH,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

function Notification({status}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: status ? SECONDARY : '#82B1CF',
        borderRadius: 8,
        marginBottom: 20,
      }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19.628}
        height={24.002}
        viewBox="0 0 19.628 24.002">
        <G data-name="Icon ionic-ios-notifications-outline" fill={WHITE}>
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
      <View
        style={{
          display: 'flex',
          paddingHorizontal: 20,
          alignItems: 'flex-end',
        }}>
        <Text style={{color: WHITE}}>4/4/21</Text>
        <Text style={{color: WHITE, textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed neque
          consequuntur perspiciatis dolor velit ducimus accusantium
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function NotificationScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark"
          headerName="Notification"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={17.992}
              height={22.001}
              viewBox="0 0 17.992 22.001">
              <G data-name="Icon ionic-ios-notifications-outline" fill="#fff">
                <Path
                  data-name="Path 2248"
                  d="M11.042 18.77a.79.79 0 00-.774.622 1.528 1.528 0 01-.3.665 1.152 1.152 0 01-.982.36 1.172 1.172 0 01-.982-.36 1.528 1.528 0 01-.3-.665.79.79 0 00-.774-.622.8.8 0 00-.774.969 2.724 2.724 0 002.835 2.262 2.719 2.719 0 002.835-2.262.8.8 0 00-.774-.969z"
                />
                <Path
                  data-name="Path 2249"
                  d="M17.766 15.905c-.867-1.09-2.572-1.728-2.572-6.607 0-5.008-2.319-7.021-4.48-7.5-.2-.048-.349-.113-.349-.317v-.16A1.348 1.348 0 009.014.001H8.98a1.348 1.348 0 00-1.355 1.32v.156c0 .2-.146.268-.349.317-2.167.488-4.48 2.5-4.48 7.5 0 4.879-1.705 5.512-2.572 6.607a1.063 1.063 0 00.901 1.71h15.763a1.063 1.063 0 00.878-1.706zm-2.2.311H2.445a.234.234 0 01-.186-.392 6.472 6.472 0 001.182-1.793 11.659 11.659 0 00.8-4.734 7.935 7.935 0 011.184-4.659 3.619 3.619 0 012.178-1.481 2 2 0 001.047-.564.46.46 0 01.67-.011 2.066 2.066 0 001.058.574 3.619 3.619 0 012.178 1.481 7.935 7.935 0 011.176 4.659 11.659 11.659 0 00.8 4.734 6.549 6.549 0 001.21 1.82.221.221 0 01-.171.366z"
                />
              </G>
            </Svg>
          }
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Notification status={false} />
          <Notification status={false} />
          <View style={{marginBottom: 20}}>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: SECONDARY,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  position: 'absolute',
                  top: -10,
                  backgroundColor: WHITE,
                  paddingHorizontal: 10,
                  color: SECONDARY,
                }}>
                Read Notification
              </Text>
            </View>
          </View>
          <Notification status={true} />
          <Notification status={true} />
          <Notification status={true} />
          <Notification status={true} />
          <Notification status={true} />
          <Notification status={true} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
