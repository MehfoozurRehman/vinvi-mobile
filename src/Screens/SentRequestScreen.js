import React, {Component} from 'react';
import {View} from 'react-native';
import {WHITE} from '../Constants/Colors';
import RequestCard from '../Components/RequestCard';
import {USER_NAME} from '../Constants/Constants';

export default class SentRequestScreen extends Component {
  render() {
    const navigation = this.props.navigation;
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
          btnText="Cancel Request"
        />
        <RequestCard
          onPress={() => {}}
          placeholder={USER_NAME}
          image={require('../Assets/profilePic.png')}
          btnText="Cancel Request"
        />
        <RequestCard
          onPress={() => {}}
          placeholder={USER_NAME}
          image={require('../Assets/profilePic.png')}
          btnText="Cancel Request"
        />
        <RequestCard
          onPress={() => {}}
          placeholder={USER_NAME}
          image={require('../Assets/profilePic.png')}
          btnText="Cancel Request"
        />
        <RequestCard
          onPress={() => {}}
          placeholder={USER_NAME}
          image={require('../Assets/profilePic.png')}
          btnText="Cancel Request"
        />
        <RequestCard
          onPress={() => {}}
          placeholder={USER_NAME}
          image={require('../Assets/profilePic.png')}
          btnText="Cancel Request"
        />
      </View>
    );
  }
}
