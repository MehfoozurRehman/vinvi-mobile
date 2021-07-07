import React from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {SECONDARY, WHITE} from '../Constants/Colors';

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

export default CustomSidebarMenu;
