import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
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
import ImagePicker from 'react-native-image-crop-picker';

export default function UploadBtn({svg, placeholder, onPress}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#A9D6EB',
          paddingVertical: 40,
          borderRadius: 5,
          marginVertical: 10,
        }}>
        {svg}
        <Text style={{fontSize: 14, color: WHITE, marginTop: 20}}>
          {placeholder}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: WHITE,
            bottom: 0,
            padding: 20,
            position: 'absolute',
            top: '50%',
          }}>
          <BtnComponent
            placeholder="Open Camera"
            onPress={() => {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                console.log(image);
              });
            }}
          />
          <BtnComponent
            placeholder="Upload Image"
            onPress={() => {
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                console.log(image);
              });
            }}
          />
          <BtnComponent
            placeholder="Close"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </>
  );
}
