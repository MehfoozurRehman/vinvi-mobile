import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Header from '../Components/Header';
import {Height, Width} from '../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersonalCardAllActiveApiCall} from '../Apis/Repo';

export default function NewBusinessCardScreen3({navigation}) {
  let [userData, setUserData] = useState(null);
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
    </SafeAreaView>
  );
}

function ProductCard({}) {
  return (
    <View
      style={{
        width: '46%',
        marginBottom: 10,
      }}>
      <Image
        source={require('../Assets/productPic.png')}
        style={{width: '100%', resizeMode: 'contain'}}
      />
      <View
        style={{
          marginTop: 10,
          width: '100%',
        }}>
        <Text
          style={{
            color: '#113066',
          }}>
          Product Name
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#113066',
            }}>
            Category
          </Text>
          <Text
            style={{
              color: '#113066',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            $54
          </Text>
        </View>
      </View>
    </View>
  );
}

function CategoryAccordian({setSelected, selected, index}) {
  return (
    <View
      style={{
        marginBottom: 15,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={() => {
          selected === index ? setSelected(false) : setSelected(index);
        }}
        style={{
          backgroundColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: '#113066',
          }}>
          Category Name
        </Text>
        <Text
          style={{
            color: '#113066',
          }}>
          7 Products
        </Text>
      </TouchableOpacity>
      {selected === index ? (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      ) : null}
    </View>
  );
}
