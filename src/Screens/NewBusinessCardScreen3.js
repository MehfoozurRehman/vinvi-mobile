import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../Components/Header';
import {Height, Width} from '../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersonalCardAllActiveApiCall} from '../Apis/Repo';
import {AddCategoryModal} from './AddCategoryModal';
import {AddProductModal} from './AddProductModal';
import {CategoryAccordian} from './CategoryAccordian';

export default function NewBusinessCardScreen3({navigation}) {
  let [userData, setUserData] = useState(null);
  const [isAddCategoryModalVisible, setIsAddCategoryModalVisible] =
    useState(false);
  const [isAddProductModalVisible, setIsAddProductModalVisible] =
    useState(false);
  const [data, setdata] = useState([]);
  const [selected, setSelected] = useState(false);
  const categoryArray = [
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
    'hello',
  ];

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getPersonalCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setdata(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const isData = true;
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark2"
          headerName="Add Products/Services"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <View
          style={{
            backgroundColor: '#F3F3F3',
            flexDirection: 'row',
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsAddCategoryModalVisible(true);
            }}
            style={{
              flex: 1,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              marginRight: 10,
            }}>
            <Text style={{color: '#242424', fontSize: 25}}>+</Text>
            <Text style={{color: '#242424'}}>Add Category</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsAddProductModalVisible(true);
            }}
            style={{
              flex: 1,
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
            }}>
            <Text style={{color: '#242424', fontSize: 25}}>+</Text>
            <Text style={{color: '#242424'}}>Add Product</Text>
          </TouchableOpacity>
        </View>
        {isData ? (
          <ScrollView
            style={{
              flex: 1,
              padding: 20,
              width: '100%',
            }}>
            {categoryArray.map((item, index) => (
              <CategoryAccordian
                setSelected={setSelected}
                selected={selected}
                index={index}
              />
            ))}
          </ScrollView>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#113066', fontSize: 16}}>
              No Product/Category Added
            </Text>
          </View>
        )}
      </ImageBackground>
      <AddCategoryModal
        modalVisible={isAddCategoryModalVisible}
        setModalVisible={setIsAddCategoryModalVisible}
      />
      <AddProductModal
        modalVisible={isAddProductModalVisible}
        setModalVisible={setIsAddProductModalVisible}
      />
    </SafeAreaView>
  );
}
