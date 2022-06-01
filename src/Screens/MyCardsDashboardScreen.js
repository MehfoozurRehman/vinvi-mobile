import React, {useState, useEffect} from 'react';
import {ImageBackground, SafeAreaView, Text} from 'react-native';
import Header from '../Components/Header';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersonalCardAllActiveApiCall} from '../Apis/Repo';
import MyCardIndividual from '../Components/MyCardIndividual';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {PRIMARY1} from '../Constants/Colors';
import {useIsFocused} from '@react-navigation/native';
import MyCardBuisness from '../Components/MyCardBuisness';

const Tab = createMaterialTopTabNavigator();

export default function MyCardsDashboardScreen(navigation) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark2"
          headerName="My Cards"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={23.875}
              height={15.417}
              viewBox="0 0 23.875 15.417">
              <G data-name="Group 635" fill="#fff">
                <Path
                  data-name="Path 2281"
                  d="M727.953 271.965c0-1.608-.661-2.26-2.257-2.261q-9.43-.005-18.86 0c-1.594 0-2.245.652-2.25 2.268q-.015 5.191 0 10.382c0 1.608.661 2.259 2.257 2.261q4.715.008 9.43 0t9.43 0c1.594 0 2.245-.652 2.25-2.268q.015-5.191 0-10.382zm-.744 10.454c0 1.121-.375 1.49-1.513 1.49q-9.431.006-18.861 0c-1.132 0-1.5-.372-1.5-1.5q-.008-5.278 0-10.555c0-1.066.387-1.444 1.469-1.446 3.172-.007 6.345 0 9.517 0h9.344c1.19 0 1.547.358 1.548 1.542q.002 5.235-.005 10.469z"
                  stroke="#fff"
                  strokeWidth={0.5}
                  transform="translate(-704.334 -269.451)"
                />
                <Path
                  data-name="Path 2282"
                  d="M783.99 291.9c-1.095 0-2.19.021-3.283-.019-.212-.008-.416-.258-.623-.4.2-.117.4-.333.6-.335q3.327-.035 6.654 0c.2 0 .4.231.593.354-.22.131-.436.367-.661.375-1.09.046-2.186.025-3.28.025z"
                  transform="translate(-704.334 -269.451) translate(-62.425 -17.718)"
                />
                <Path
                  data-name="Path 2283"
                  d="M783.983 330.707c-1.095 0-2.19.023-3.284-.019-.209-.008-.408-.267-.612-.411.2-.112.409-.319.615-.322q3.327-.036 6.655 0c.195 0 .387.241.581.369-.195.127-.386.357-.585.363-1.122.037-2.246.019-3.37.02z"
                  transform="translate(-704.334 -269.451) translate(-62.43 -49.802)"
                />
                <Path
                  data-name="Path 2284"
                  d="M783.96 304.084c1.068 0 2.137-.024 3.2.018.253.01.5.241.746.37-.23.12-.46.341-.692.343q-3.247.039-6.5 0c-.222 0-.441-.242-.662-.371.232-.115.46-.322.695-.33 1.067-.036 2.136-.016 3.2-.016z"
                  transform="translate(-704.334 -269.451) translate(-62.407 -28.421)"
                />
                <Path
                  data-name="Path 2285"
                  d="M783.989 317.064c1.091 0 2.184-.021 3.274.016.23.008.452.23.678.354-.223.125-.444.357-.668.359q-3.274.035-6.548-.013c-.211 0-.418-.25-.628-.383.206-.111.409-.311.619-.317 1.09-.032 2.184-.015 3.273-.016z"
                  transform="translate(-704.334 -269.451) translate(-62.437 -39.154)"
                />
                <Path
                  data-name="Path 2286"
                  d="M713.078 276.341c.894-1.411.886-2.538-.005-3.366a1.821 1.821 0 00-2.4-.074c-.951.78-.984 1.873-.095 3.471-2.021 1.254-2.461 3.247-2.579 5.458h7.654c-.117-2.237-.528-4.248-2.575-5.489zm-2.551-1.734a1.394 1.394 0 011.32-1.509 1.441 1.441 0 011.316 1.464 1.5 1.5 0 01-1.309 1.56 1.413 1.413 0 01-1.327-1.518zm-.548 3.033a2.415 2.415 0 013.968.263 5.729 5.729 0 011.044 3.312h-6.327a5.433 5.433 0 011.315-3.575z"
                  stroke="#fff"
                  strokeWidth={0.5}
                  transform="translate(-704.334 -269.451)"
                />
              </G>
            </Svg>
          }
        />
        <Tab.Navigator
          initialRouteName="Individual"
          tabBarOptions={{
            labelStyle: {
              fontSize: 12,
              color: useIsFocused ? '#ffffff' : '#ffffff',
            },
            style: {
              backgroundColor: 'transparent',
              borderWidth: 0,
              elevation: 0,
              marginHorizontal: 20,
              marginBottom: 30,
              color: useIsFocused ? '#ffffff' : 'null',
            },
            bounces: true,
          }}
          sceneContainerStyle={{backgroundColor: '#ffffff'}}>
          <Tab.Screen
            name="Individual"
            component={Individual}
            // component={<Individual data={data} />}
          />
          <Tab.Screen
            name="Buisness"
            component={Buisness}
            // component={<Buisness data={data} />}
          />
        </Tab.Navigator>
      </ImageBackground>
    </SafeAreaView>
  );
}

function Individual({navigation}) {
  const [selected, setSelected] = useState(null);
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
  return (
    <>
      {data != null ? (
        <FlatList
          data={data}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <MyCardIndividual
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
              selected={selected}
              setSelected={setSelected}
              index={index}
            />
          )}
        />
      ) : null}
    </>
  );
}
function Buisness({navigation}) {
  const [selected, setSelected] = useState(null);
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
  return (
    <>
      {data != null ? (
        <FlatList
          data={data}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <MyCardBuisness
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
              index={index}
              selected={selected}
              setSelected={setSelected}
            />
          )}
        />
      ) : null}
    </>
  );
}
