import React, {useState, useEffect} from 'react';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import IndividualCard from '../Components/IndividualCard';
import {Height, Width} from '../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker';
import BuisnessCard from '../Components/BuisnessCard';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useIsFocused} from '@react-navigation/native';
import {PRIMARY} from '../Constants/Colors';
import {
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  getBusinessCardAllActiveApiCall,
  getPersonalCardAllActiveApiCall,
} from '../Apis/Repo';

const Tab = createMaterialTopTabNavigator();

export default function HomeDashboardScreen(props) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/dashboardbg.png')}
        style={{flex: 1, paddingBottom: 80}}>
        <Header
          navigation={props.navigation}
          variant="drawer"
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
        <View
          style={{
            paddingHorizontal: 20,
            marginTop: -65,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 5,
          }}>
          <TouchableOpacity
            style={{
              width: '17%',
              height: 55,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 43,
              marginRight: 10,
            }}
            onPress={() => {
              launchImageLibrary({mediaType: 'photo'}, () => {});
            }}>
            <Text style={{color: '#242424', fontSize: 25}}>+</Text>
          </TouchableOpacity>
          <View style={{width: '81%'}}>
            <DashboardStories />
          </View>
        </View>
        <Tab.Navigator
          initialRouteName="Individual"
          tabBarOptions={{
            indicatorStyle: {backgroundColor: '#ffffff'},
            labelStyle: {
              fontSize: 12,
              color: 'white',
              fontWeight: 'bold',
            },
            style: {
              backgroundColor: 'transparent',
              borderWidth: 0,
              elevation: 0,
              marginHorizontal: 20,
              marginTop: 10,
              marginBottom: 20,
              color: useIsFocused ? PRIMARY : null,
            },
            bounces: true,
          }}
          sceneContainerStyle={{backgroundColor: 'transprent'}}>
          <Tab.Screen
            name="Individual"
            component={IndividualDataCardsListing}
          />
          <Tab.Screen name="Buisness" component={BuisnessDataCardsListing} />
        </Tab.Navigator>
      </ImageBackground>
    </SafeAreaView>
  );
}

function IndividualDataCardsListing({navigation}) {
  const [individualData, setIndividualData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getPersonalCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setIndividualData(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {individualData != null ? (
        <FlatList
          data={individualData}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <IndividualCard
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
            />
          )}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 300,
          }}>
          <Text style={{color: '#242424'}}>No Cards</Text>
        </View>
      )}
    </>
  );
}

function BuisnessDataCardsListing({navigation}) {
  const [buisnessData, setBuisnessData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getBusinessCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setBuisnessData(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {buisnessData != null ? (
        <FlatList
          data={buisnessData}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <BuisnessCard
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
            />
          )}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 300,
          }}>
          <Text style={{color: '#242424'}}>No Cards</Text>
        </View>
      )}
    </>
  );
}
