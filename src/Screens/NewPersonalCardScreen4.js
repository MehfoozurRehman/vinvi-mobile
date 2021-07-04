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
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
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
            navigation.navigate('NewPersonalCard3');
          }}
        />
        <NewCardStepPanel step1={true} step2={true} step3={true} step4={true} />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              padding: 20,
            }}>
            <OutlinedInputBox
              placeholder="Introductory Message"
              inputType="text"
            />
            <OutlinedInputBox placeholder="QR Code" inputType="text" />
            <OutlinedInputBox placeholder="Hobbies" inputType="text" />
            <OutlinedInputBox placeholder="Education" inputType="text" />
            <OutlinedInputBox placeholder="Interests" inputType="text" />
            <OutlinedInputBox placeholder="Achievements" inputType="text" />
            <OutlinedInputBox placeholder="Personal Info" inputType="text" />
            <OutlinedInputBox placeholder="Skills" inputType="text" />
            <OutlinedInputBox placeholder="Portfolio" inputType="text" />
            <OutlinedInputBox placeholder="Job History" inputType="text" />
            <BtnComponent
              placeholder="Finish"
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
