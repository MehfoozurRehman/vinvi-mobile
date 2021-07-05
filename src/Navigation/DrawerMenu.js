import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {G, Rect, Path} from 'react-native-svg';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: SECONDARY}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          width: '100%',
          paddingHorizontal: 15,
          paddingVertical: 40,
          position: 'absolute',
          top: 0,
          backgroundColor: SECONDARY,
          zIndex: 1,
        }}>
        <Image
          source={require('../Assets/profilePic.png')}
          style={{width: 50, height: 50}}
        />
        <View style={{marginLeft: 20}}>
          <Text style={{color: WHITE, fontSize: 18, fontWeight: 'bold'}}>
            Adam Christ
          </Text>
          <Text style={{color: WHITE, fontSize: 14}}>adam@gmail.com</Text>
        </View>
      </View>
      <View style={{marginTop: 90}}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
