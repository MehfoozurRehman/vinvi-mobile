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
  SafeAreaView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

function ChatCard({
  name,
  picture,
  lastMessage,
  timeStamp,
  badgeValue,
  navigation,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Messages');
      }}
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE,
        borderRadius: 5,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginHorizontal: 20,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image source={picture} style={{width: 55, height: 55}} />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{name}</Text>
          <Text style={{fontSize: 16, color: '#3C50FF'}}>{lastMessage}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{fontSize: 16, color: LIGHT_TEXT_COLOR, marginBottom: 5}}>
          {timeStamp}
        </Text>
        <View
          style={{
            backgroundColor: SECONDARY,
            width: 22,
            height: 22,
            borderRadius: 22,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: WHITE}}>{badgeValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ChatsDashboardScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{flex: 1, paddingBottom: 80}}>
        <Header
          navigation={navigation}
          variant="dark"
          headerName="Chats"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={21.223}
              height={21.223}
              viewBox="0 0 21.223 21.223">
              <Path
                data-name="Icon feather-message-square"
                d="M21.223 14.148a2.358 2.358 0 01-2.358 2.358H4.716L0 21.223V2.358A2.358 2.358 0 012.358 0h16.506a2.358 2.358 0 012.358 2.358z"
                fill="#fff"
              />
            </Svg>
          }
        />
        <ScrollView style={{flex: 1}}>
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
          <ChatCard
            picture={require('../Assets/profilePic.png')}
            lastMessage="Hi, I am there"
            name="John Smith"
            timeStamp="16:43"
            badgeValue="3"
            navigation={navigation}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}
