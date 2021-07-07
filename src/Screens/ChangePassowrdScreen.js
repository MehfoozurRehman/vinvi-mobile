import React, {useState} from 'react';
import {View, ImageBackground, TextInput, SafeAreaView} from 'react-native';
import {SECONDARY} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

function ChangePasswordInputBox({placeholder}) {
  const [focus, setFocus] = useState(false);
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: focus ? 1 : 0,
        borderColor: SECONDARY,
      }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={13.505}
        height={18.197}
        viewBox="0 0 13.505 18.197">
        <Path
          data-name="Path 1404"
          d="M12.084 7V5.331a5.331 5.331 0 10-10.662 0V7A1.78 1.78 0 000 8.743v2.018a.355.355 0 10.711 0V8.743a1.067 1.067 0 011.066-1.066h9.951a1.067 1.067 0 011.066 1.066v7.677a1.068 1.068 0 01-.711 1.005v-2.143a.355.355 0 00-.711 0v2.2h-9.6A1.067 1.067 0 01.711 16.42v-2.808a.355.355 0 00-.711 0v2.808a1.779 1.779 0 001.777 1.78h9.951a1.779 1.779 0 001.777-1.777v-7.68A1.78 1.78 0 0012.084 7zm-8.032-.034V5.331a2.7 2.7 0 115.4 0v1.635zm6.113 0V5.331a3.412 3.412 0 10-6.824 0v1.635H2.132V5.331a4.62 4.62 0 119.241 0v1.635zm0 0"
          fill="#313b79"
        />
        <Path
          data-name="Path 1405"
          d="M.355 12.529A.355.355 0 100 12.172a.355.355 0 00.355.355zm0 0"
          fill="#313b79"
        />
        <Path
          data-name="Path 1406"
          d="M6.753 16.277a1.067 1.067 0 001.066-1.066v-1.887a1.919 1.919 0 10-2.132-.006v1.893a1.067 1.067 0 001.066 1.066zm-1.2-4.552a1.208 1.208 0 111.754 1.078.355.355 0 00-.195.317v2.091a.355.355 0 11-.711 0v-2.1a.355.355 0 00-.193-.316 1.2 1.2 0 01-.659-1.07zm0 0"
          fill="#313b79"
        />
        <Path
          data-name="Path 1407"
          d="M11.728 14.181a.355.355 0 10-.251-.1.357.357 0 00.251.1zm0 0"
          fill="#313b79"
        />
      </Svg>
      <TextInput
        placeholder={placeholder}
        style={{paddingHorizontal: 20}}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
    </View>
  );
}

export default function ChangePassowrdScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark"
          headerName="Change Password"
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={13.505}
              height={18.197}
              viewBox="0 0 13.505 18.197">
              <Path
                data-name="Path 1404"
                d="M12.084 7V5.331a5.331 5.331 0 10-10.662 0V7A1.78 1.78 0 000 8.743v2.018a.355.355 0 10.711 0V8.743a1.067 1.067 0 011.066-1.066h9.951a1.067 1.067 0 011.066 1.066v7.677a1.068 1.068 0 01-.711 1.005v-2.143a.355.355 0 00-.711 0v2.2h-9.6A1.067 1.067 0 01.711 16.42v-2.808a.355.355 0 00-.711 0v2.808a1.779 1.779 0 001.777 1.78h9.951a1.779 1.779 0 001.777-1.777v-7.68A1.78 1.78 0 0012.084 7zm-8.032-.034V5.331a2.7 2.7 0 115.4 0v1.635zm6.113 0V5.331a3.412 3.412 0 10-6.824 0v1.635H2.132V5.331a4.62 4.62 0 119.241 0v1.635zm0 0"
                fill="#fff"
              />
            </Svg>
          }
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: 40,
          }}>
          <View>
            <ChangePasswordInputBox placeholder="Enter Previous Password" />
            <ChangePasswordInputBox placeholder="Enter New Password" />
            <ChangePasswordInputBox placeholder="Re-Enter New Password" />
          </View>
          <BtnComponent placeholder="Chnage Password" onPress={() => {}} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
