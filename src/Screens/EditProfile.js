import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';
import ChangePasswordInputBox from '../Components/ChangePasswordInputBox';
import Svg, {Path} from 'react-native-svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';
import BtnComponent from '../Components/BtnComponent';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

export default function NewCardScreen(props, navigation, onCallBack) {
  const getBase64 = (image, type) => {
    console.log('image base 64', image);
    console.log('type', type);
    const base64Converted = 'data:image/png;base64,' + image;
    setImage(base64Converted);
  };
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="light2"
          headerName="Edit Profile"
          onPress={() => {
            props.navigation.push('Dashboard');
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
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Image
            source={require('../Assets/profilePic.png')}
            style={{height: 100, width: 100}}
          />
          <TouchableOpacity
            onPress={() => {
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                RNFS.readFile(image.path, 'base64').then(res => {
                  // console.log("res", res)
                  onCallBack(
                    res,
                    placeholder == 'Profile Photo' ? 'profile' : 'cover',
                  );
                });
              });
            }}
            onCallBack={getBase64}>
            <Image
              source={require('../Assets/editProf.png')}
              style={{marginTop: 70, marginLeft: -20}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: 50,
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: 75,
          }}>
          <View>
            <ChangePasswordInputBox placeholder="First Name" />
            <ChangePasswordInputBox placeholder="Last Name" />
            <ChangePasswordInputBox placeholder="Email" />
          </View>
          <BtnComponent
            placeholder="Save"
            onPress={() => {
              props.navigation.push('Dashboard');
            }}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
