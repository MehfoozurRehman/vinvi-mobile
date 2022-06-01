import React, {useState, useEffect} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import UserCard from '../Components/UserCard';
import {Height, Width} from '../Constants/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import {
  getBusinessCardAllActiveApiCall,
  getPersonalCardAllActiveApiCall,
} from '../Apis/Repo';

export default function HomeDashboardScreen(props) {
  let [userData, setUserData] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getData();
    getData2();
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

  const getData2 = () => {
    getBusinessCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setdata(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

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
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: 5,
          }}>
          <TouchableOpacity
            style={{
              width: 55,
              height: 55,
              backgroundColor: '#ffffff',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              marginTop: 43,
              marginRight: 10,
            }}>
            <Text style={{color: '#242424', fontSize: 25}}>+</Text>
          </TouchableOpacity>
          <DashboardStories />
        </View>
        {data != null ? (
          <FlatList
            data={data}
            horizontal={false}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <UserCard
                cta={true}
                variant="closed"
                navigation={props.navigation}
                navigationPath="Individual"
                item={item}
                key={index}
              />
            )}
          />
        ) : null}
      </ImageBackground>
    </SafeAreaView>
  );
}

{
  /* <ScrollView style={{ flex: 1 }}>
          <UserCard
            cta={true}
            variant="closed"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="broadcasted"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="open"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="open"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="open"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="open"
            navigation={props.navigation}
            navigationPath="Individual"
          />
          <UserCard
            cta={true}
            variant="open"
            navigation={props.avigation}
            navigationPath="Individual"
          />
        </ScrollView> */
}
