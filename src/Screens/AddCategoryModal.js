import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Modal,
  Dimensions,
} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import Svg, {Path} from 'react-native-svg';

export function AddCategoryModal({
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
                {isEdit ? 'Edit' : 'Add'} Education
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
              placeholder="Institute"
              inputType="text"
              onChange={value => {
                setHobbies(value);
              }}
            />
            <View
              style={{
                flexDirection: 'row',
              }}>
              <OutlinedInputBox
                placeholder="From"
                inputType="text"
                style={{
                  width: '48%',
                  marginRight: '2%',
                }}
                onChange={value => {
                  setHobbies(value);
                }}
              />
              <OutlinedInputBox
                placeholder="To"
                inputType="text"
                style={{
                  width: '50%',
                }}
                onChange={value => {
                  setHobbies(value);
                }}
              />
            </View>
            <OutlinedInputBox
              placeholder="Degree"
              inputType="text"
              onChange={value => {
                setHobbies(value);
              }}
            />
            <BtnComponent
              placeholder={isEdit ? 'Edit' : 'Add'}
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
