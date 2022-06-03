import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
  Image,
} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import Svg, {Path} from 'react-native-svg';
import UploadBtn from '../Components/UploadBtn';

export function AddProductModal({
  modalVisible,
  setModalVisible,
  setHobbies,
  isEdit,
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(64,77,136,.8)',
            flex: 1,
            height: Dimensions.get('window').height,
            padding: 20,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#113066',
              width: '100%',
              backgroundColor: '#ffffff',
              padding: 20,
              paddingBottom: 0,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text
                style={{
                  color: '#242424',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {isEdit ? 'Edit' : 'Add'} Product
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.849}
                  height={20.849}
                  viewBox="0 0 30.849 30.849">
                  <Path
                    data-name="Icon metro-cancel"
                    d="M17.995 1.928a15.424 15.424 0 1015.424 15.424A15.424 15.424 0 0017.995 1.928zm0 27.956a12.532 12.532 0 1112.532-12.532 12.532 12.532 0 01-12.532 12.533zm4.82-20.244l-4.82 4.82-4.82-4.82-2.892 2.892 4.82 4.82-4.82 4.82 2.892 2.892 4.82-4.82 4.82 4.82 2.892-2.892-4.82-4.82 4.82-4.82z"
                    transform="translate(-2.571 -1.928)"
                    fill="#242424"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
            <OutlinedInputBox
              placeholder="Product Name"
              inputType="text"
              onChange={value => {
                setHobbies(value);
              }}
            />
            <OutlinedInputBox
              placeholder="Category"
              inputType="text"
              onChange={value => {
                setHobbies(value);
              }}
            />
            <OutlinedInputBox
              placeholder="Price"
              inputType="text"
              onChange={value => {
                setHobbies(value);
              }}
            />
            <UploadBtn placeholder="Upload Image" />
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View
                style={{
                  position: 'relative',
                  alignItems: 'flex-end',
                }}>
                <TouchableOpacity>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15.849}
                    height={15.849}
                    viewBox="0 0 30.849 30.849">
                    <Path
                      data-name="Icon metro-cross"
                      d="M33.138 26.711l-9.358-9.358 9.358-9.358a.966.966 0 000-1.363L28.717 2.21a.967.967 0 00-1.363 0L18 11.568 8.637 2.21a.966.966 0 00-1.363 0L2.852 6.631a.966.966 0 000 1.363l9.358 9.358-9.358 9.359a.966.966 0 000 1.363l4.421 4.421a.966.966 0 001.363 0L18 23.136l9.358 9.358a.966.966 0 001.363 0l4.421-4.421a.966.966 0 000-1.363z"
                      transform="translate(-2.571 -1.928)"
                      fill="#242424"
                    />
                  </Svg>
                </TouchableOpacity>
                <Image
                  source={require('../Assets/companyPic.png')}
                  style={{width: 100, height: 100}}
                />
              </View>
            </View>
            <BtnComponent
              placeholder="Save"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}
