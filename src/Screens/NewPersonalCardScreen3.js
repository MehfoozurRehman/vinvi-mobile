import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import UploadBtn from '../Components/UploadBtn';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default function NewCardScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark"
          // headerIcon={
          //   <Svg
          //     xmlns="http://www.w3.org/2000/svg"
          //     width={20.936}
          //     height={20.828}
          //     viewBox="0 0 24.936 25.828">
          //     <Path
          //       d="M24.557 23.525l-6.147-6.393a10.424 10.424 0 10-7.982 3.724 10.316 10.316 0 005.974-1.887l6.194 6.442a1.36 1.36 0 101.96-1.886zM10.428 2.72a7.708 7.708 0 11-7.712 7.708 7.716 7.716 0 017.712-7.708z"
          //       fill="#4a5a92"
          //     />
          //   </Svg>
          // }
          headerName="New Card"
          onPress={() => {
            navigation.navigate('NewPersonalCard2');
          }}
        />
        <NewCardStepPanel
          step1={true}
          step2={true}
          step3={true}
          step4={false}
        />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              padding: 20,
            }}>
            <UploadBtn
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={42.736}
                  height={51.223}
                  viewBox="0 0 42.736 51.223">
                  <G data-name="user (2)" fill="#fff">
                    <Path
                      data-name="Path 2128"
                      d="M33.382 12.337a11.939 11.939 0 01-3.61 8.723 11.938 11.938 0 01-8.724 3.614h-.006a11.94 11.94 0 01-8.717-3.614 11.937 11.937 0 01-3.614-8.724 11.936 11.936 0 013.614-8.722A11.935 11.935 0 0121.039 0h.006a11.942 11.942 0 018.727 3.615 11.937 11.937 0 013.614 8.722zm0 0"
                    />
                    <Path
                      data-name="Path 2129"
                      d="M42.737 42.414a8.5 8.5 0 01-2.527 6.435 9.093 9.093 0 01-6.51 2.374H9.036a9.089 9.089 0 01-6.509-2.375A8.5 8.5 0 010 42.414c0-1.029.034-2.046.1-3.025a30.282 30.282 0 01.415-3.238 25.55 25.55 0 01.8-3.253 16.135 16.135 0 011.338-3.036 11.489 11.489 0 012.017-2.629 8.9 8.9 0 012.9-1.821 10.019 10.019 0 013.7-.669 3.749 3.749 0 012 .849c.61.4 1.314.852 2.09 1.348a11.933 11.933 0 002.7 1.191 10.769 10.769 0 002.978.528q.164.006.327.006a10.745 10.745 0 003.306-.534 11.933 11.933 0 002.7-1.191c.785-.5 1.488-.954 2.09-1.347a3.745 3.745 0 012.005-.85 10.025 10.025 0 013.7.669 8.9 8.9 0 012.9 1.821 11.449 11.449 0 012.017 2.629 16.082 16.082 0 011.338 3.035 25.528 25.528 0 01.8 3.255 30.567 30.567 0 01.414 3.236c.069.975.1 1.993.1 3.026zm0 0"
                    />
                    <Path
                      data-name="Path 2130"
                      d="M21.046 24.674h-.006V0h.006a11.942 11.942 0 018.724 3.614 11.937 11.937 0 013.614 8.722 11.939 11.939 0 01-3.614 8.724 11.938 11.938 0 01-8.724 3.614zm0 0"
                    />
                    <Path
                      data-name="Path 2131"
                      d="M42.736 42.414a8.5 8.5 0 01-2.527 6.435 9.093 9.093 0 01-6.51 2.375h-12.66V28.659q.164.006.327.006a10.745 10.745 0 003.306-.534 11.933 11.933 0 002.7-1.191c.785-.5 1.488-.954 2.09-1.347a3.745 3.745 0 012.005-.85 10.026 10.026 0 013.7.669 8.9 8.9 0 012.9 1.821 11.448 11.448 0 012.017 2.629 16.083 16.083 0 011.338 3.035 25.536 25.536 0 01.8 3.255 30.57 30.57 0 01.414 3.236c.069.975.1 1.993.1 3.026zm0 0"
                    />
                  </G>
                </Svg>
              }
              placeholder="Profile Photo"
            />
            <UploadBtn
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50.618}
                  height={50.618}
                  viewBox="0 0 50.618 50.618">
                  <G data-name="Icon ionic-ios-image" fill="#fff">
                    <Path
                      data-name="Path 2210"
                      d="M7.861 32.159h23.2a.678.678 0 00.548-1.071L20.004 12.423a.671.671 0 00-1.107 0L7.301 31.089a.682.682 0 00.56 1.07z"
                    />
                    <Path
                      data-name="Path 2211"
                      d="M31.479 25.102l4.259 6.777a.659.659 0 00.548.292h6.477a.678.678 0 00.548-1.071L35.81 20.426a.671.671 0 00-1.107 0l-3.24 3.91a.7.7 0 00.016.766z"
                    />
                    <Path
                      data-name="Path 2212"
                      d="M36.881 14.589a3.406 3.406 0 10-3.736-3.736 3.419 3.419 0 003.736 3.736z"
                    />
                    <Path
                      data-name="Path 2213"
                      d="M46.725 0H3.894A3.89 3.89 0 000 3.894v42.831a3.89 3.89 0 003.894 3.894h42.831a3.89 3.89 0 003.893-3.894V3.894A3.89 3.89 0 0046.725 0zm-.329 34.07a.976.976 0 01-.973.973H5.196a.976.976 0 01-.973-.973V5.196a.976.976 0 01.973-.971h40.239a.976.976 0 01.973.973V34.07z"
                    />
                  </G>
                </Svg>
              }
              placeholder="Cover Photo"
            />
            <BtnComponent
              placeholder="Next"
              onPress={() => {
                navigation.navigate('NewPersonalCard4');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
