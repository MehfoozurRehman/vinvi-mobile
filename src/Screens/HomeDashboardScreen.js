import React from 'react';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import {Height, Width} from '../Constants/Constants';
import {launchImageLibrary} from 'react-native-image-picker';
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
import {IndividualDataCardsListing} from './IndividualDataCardsListing';
import {BuisnessDataCardsListing} from './BuisnessDataCardsListing';

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
