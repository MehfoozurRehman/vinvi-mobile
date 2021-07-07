import React from 'react';
import {View} from 'react-native';
import {WHITE} from '../Constants/Colors';
import RequestCard from '../Components/RequestCard';

export default function SentRequestScreen({navigation}) {
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
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
      <RequestCard
        onPress={() => {}}
        placeholder="Umer Altaf"
        image={require('../Assets/profilePic.png')}
        btnText="Cancel Request"
      />
    </View>
  );
}
