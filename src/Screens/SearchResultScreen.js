import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
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
import UploadBtn from '../Components/UploadBtn';
import TopTabsNavigator from '../Navigation/TopTabsNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

function FilterTag({filterName, filterValue, onPress}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#eeeeee',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 20,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{filterName}</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, marginRight: 12}}>{filterValue}</Text>
        <TouchableOpacity onPress={onPress}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            viewBox="0 0 9.5 9.5">
            <Path
              data-name="Icon metro-cross"
              d="M9.413 7.632L6.529 4.75l2.884-2.878a.3.3 0 000-.42L8.052.087a.3.3 0 00-.42 0L4.75 2.972 1.868.087a.3.3 0 00-.42 0L.087 1.448a.3.3 0 000 .42L2.969 4.75.087 7.632a.3.3 0 000 .42l1.361 1.361a.3.3 0 00.42 0L4.75 6.531l2.879 2.882a.3.3 0 00.42 0l1.364-1.361a.3.3 0 000-.42z"
              fill="#113066"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function SearchResultScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1}}>
        <Header
          navigation={navigation}
          variant="dark"
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={20.936}
              height={20.828}
              viewBox="0 0 24.936 25.828">
              <Path
                d="M24.557 23.525l-6.147-6.393a10.424 10.424 0 10-7.982 3.724 10.316 10.316 0 005.974-1.887l6.194 6.442a1.36 1.36 0 101.96-1.886zM10.428 2.72a7.708 7.708 0 11-7.712 7.708 7.716 7.716 0 017.712-7.708z"
                fill="#ffffff"
              />
            </Svg>
          }
          headerName="Search"
          onPress={() => {
            navigation.navigate('Search');
          }}
        />

        <FilterTag filterName="Area" filterValue="Lahore" onPress={() => {}} />
        <FilterTag
          filterName="Niche"
          filterValue="Software Engineering"
          onPress={() => {}}
        />
        <FilterTag filterName="Name" filterValue="Rahul" onPress={() => {}} />
        <Text style={{marginVertical: 10, fontSize: 18, marginHorizontal: 20}}>
          Showing 203 Results
        </Text>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}></ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
