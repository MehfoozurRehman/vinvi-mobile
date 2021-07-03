import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
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
import UploadBtn from '../Components/UploadBtn';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';

export default function SearchBuisnessScreen({navigation}) {
  return (
    <View
      style={{
        width: '100%',
        padding: 20,
        backgroundColor: WHITE,
        height: '100%',
      }}>
      <OutlinedInputBox placeholder="Product Shelving" inputType="text" />
      <BtnComponent
        placeholder="Search"
        onPress={() => {
          navigation.navigate('');
        }}
      />
    </View>
  );
}
