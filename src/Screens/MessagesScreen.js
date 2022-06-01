import React from 'react';
import {View, TouchableOpacity, TextInput, SafeAreaView} from 'react-native';
import {WHITE} from '../Constants/Colors';
import Header from '../Components/Header';
import UserMessage from '../Components/UserMessage';
import TimeStamp from '../Components/TimeStamp';
import OtherMessage from '../Components/OtherMessage';
import Svg, {Defs, ClipPath, Path, G, Rect} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';
import {FlatList} from 'react-native-gesture-handler';

const ChatsDashboardScreen = props => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
  ];
  const navigation = props.navigation;
  return (
    <SafeAreaView
      style={{
        height: Height,
        width: Width,
        backgroundColor: WHITE,
        paddingBottom: 15,
      }}>
      <Header
        navigation={navigation}
        variant="account"
        userName="John Doe"
        userStatus="online"
        onPress={() => {
          navigation.navigate('Chats');
        }}
        userProfilePicture={require('../Assets/profilePic.png')}
      />
      <FlatList
        style={{
          paddingHorizontal: 20,
        }}
        data={data}
        renderItem={() => (
          <>
            <UserMessage
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
    dolores odit?"
            />
            <TimeStamp placeholder="Monday, 10:40 am" />
            <OtherMessage
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
    dolores odit? Eius tenetur exercitationem natus doloribus impedit,
    nemo beatae corrupti."
            />
          </>
        )}
      />
      <View style={{flexDirection: 'row', width: '100%'}}>
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 8,
            minHeight: 50,
            display: 'flex',
            flexDirection: 'row',
            marginLeft: 20,
            flex: 1,
          }}>
          <TextInput
            placeholder="Type your message"
            multiline={true}
            style={{
              flex: 1,
              paddingHorizontal: 20,
              color: '#242424',
            }}
            placeholderTextColor="#242424"
          />
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={16}
              viewBox="0 0 24 16">
              <G
                transform="translate(1 1)"
                fill="none"
                stroke="#404e88"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}>
                <Path data-name="Path 2289" d="M22 2l-7 5 7 5z" />
                <Rect
                  data-name="Rectangle 1610"
                  width={15}
                  height={14}
                  rx={2}
                />
              </G>
            </Svg>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#eeeeee',
            borderRadius: 8,
            minHeight: 50,
            display: 'flex',
            flexDirection: 'row',
            marginRight: 20,
            marginLeft: 10,
          }}>
          <TouchableOpacity
            style={{
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={17}
              height={18}
              viewBox="0 0 17 18">
              <Defs>
                <ClipPath id="prefix__a">
                  <Path fill="none" d="M0 0h17v18H0z" />
                </ClipPath>
              </Defs>
              <G data-name="Component 24 \u2013 1" clipPath="url(#prefix__a)">
                <Path
                  data-name="Path 10"
                  d="M8.616 0L7.05 1.567 12.981 7.5H0v2.235h12.981L7.05 15.666l1.567 1.567 8.616-8.616z"
                  fill="#3c50ff"
                />
              </G>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatsDashboardScreen;
