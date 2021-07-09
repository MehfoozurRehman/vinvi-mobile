import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Header from '../Components/Header';
import Notification from '../Components/Notification';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default class NotificationScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/screenbg.png')}
          style={{flex: 1, paddingBottom: 20}}>
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
            <Notification status={true} />
            <Notification status={true} />
            <Notification status={true} />
            <Notification status={true} />
            <Notification status={true} />
            <Notification status={true} />
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
}
