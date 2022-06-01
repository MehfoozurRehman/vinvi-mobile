import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {WHITE} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

const UploadBtn = ({svg, placeholder, onCallBack}) => {
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
          alert('Modal has been closed.');
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
                cropping: false,
              }).then(image => {
                console.log(image);
                RNFS.readFile(image.path, 'base64').then(res => {
                  // console.log("res", res)
                  onCallBack(
                    res,
                    placeholder == 'Profile Photo' ? 'profile' : 'cover',
                  );
                });
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
                RNFS.readFile(image.path, 'base64').then(res => {
                  // console.log("res", res)
                  onCallBack(
                    res,
                    placeholder == 'Profile Photo' ? 'profile' : 'cover',
                  );
                });
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
};

export default UploadBtn;
