import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';

export default function NewCardStepPanel({step1, step2, step3, step4}) {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      {step1 ? (
        <>
          <View
            style={{
              backgroundColor: SECONDARY,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: WHITE,
              }}>
              1
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: SECONDARY}}></View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: WHITE,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: SECONDARY,
              }}>
              1
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: WHITE}}></View>
        </>
      )}
      {step2 ? (
        <>
          <View
            style={{
              backgroundColor: SECONDARY,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: WHITE,
              }}>
              2
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: SECONDARY}}></View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: WHITE,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: SECONDARY,
              }}>
              2
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: WHITE}}></View>
        </>
      )}
      {step3 ? (
        <>
          <View
            style={{
              backgroundColor: SECONDARY,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: WHITE,
              }}>
              3
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: SECONDARY}}></View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: WHITE,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: SECONDARY,
              }}>
              3
            </Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: WHITE}}></View>
        </>
      )}
      {step4 ? (
        <>
          <View
            style={{
              backgroundColor: SECONDARY,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: WHITE,
              }}>
              4
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              backgroundColor: WHITE,
              width: 30,
              height: 30,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: SECONDARY,
              }}>
              4
            </Text>
          </View>
        </>
      )}
    </View>
  );
}
