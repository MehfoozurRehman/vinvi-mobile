import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';

export default function IndividualCard({
  cta,
  favoritBtn,
  navigation,
  navigationPath,
  item,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(navigationPath, {id: item.id});
      }}
      activeOpacity={0.9}
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: WHITE,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 8,
        position: 'relative',
      }}>
      <Image
        source={require('../Assets/profilePic.png')}
        style={{width: 80, height: 80}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.name}</Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: SECONDARY,
            marginBottom: 10,
          }}>
          {item.occupation}
          {/* {USER_DESIGNATION} */}
        </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.email} </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{item.address}</Text>
      </View>
      {cta ? (
        <View
          style={{
            backgroundColor: WHITE,
            width: 40,
            height: 40,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '50%',
            right: -15,
            shadowColor: '#000',
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={13.855}
            height={13.855}
            viewBox="0 0 13.855 13.855">
            <Path
              data-name="Icon material-arrow_back"
              d="M0 7.793h10.538l-4.841 4.841 1.23 1.221 6.928-6.928L6.927-.001 5.706 1.22l4.832 4.842H0z"
              fill="#151269"
            />
          </Svg>
        </View>
      ) : null}
      {favoritBtn ? (
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 20,
            right: 20,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            height={13.125}
            viewBox="0 0 15 13.125">
            <Path
              data-name="Icon awesome-heart"
              d="M13.544.897a4.006 4.006 0 00-5.467.4l-.576.593-.577-.595a4.006 4.006 0 00-5.467-.4 4.207 4.207 0 00-.29 6.091l5.669 5.853a.918.918 0 001.327 0l5.668-5.851a4.2 4.2 0 00-.287-6.091z"
              fill="#aed8ec"
            />
          </Svg>
          <Text>20</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
