import React from 'react';
import {View} from 'react-native';
import {WHITE} from '../Constants/Colors';
import RequestCard from '../Components/RequestCard';
import {USER_NAME} from '../Constants/Constants';

export default function RecievedRequestScreen() {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingBottom: 20,
        height: '100%',
      }}>
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder={USER_NAME}
        image={require('../Assets/profilePic.png')}
        btnText="Accept Request"
      />
    </View>
  );
}
