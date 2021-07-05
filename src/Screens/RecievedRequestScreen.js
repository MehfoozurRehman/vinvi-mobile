import React, {useState, useRef} from 'react';
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
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import UploadBtn from '../Components/UploadBtn';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import RequestCard from '../Components/RequestCard';

export default function RecievedRequestScreen({navigation}) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingBottom: 20,
        height: '100%',
      }}>
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
    </View>
  );
}
