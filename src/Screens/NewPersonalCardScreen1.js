import React, {Component} from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Height, Width} from '../Constants/Constants';

export default class NewCardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/screenbg.png')}
          style={{flex: 1}}>
          <Header
            navigation={navigation}
            variant="dark"
            headerName="New Card"
            onPress={() => {
              navigation.navigate('AddCard');
            }}
          />
          <NewCardStepPanel
            step1={true}
            step2={false}
            step3={false}
            step4={false}
          />
          <ScrollView style={{flex: 1}}>
            <View
              style={{
                width: '100%',
                padding: 20,
              }}>
              <OutlinedInputBox placeholder="Name" inputType="text" />
              <OutlinedInputBox placeholder="Occupation" inputType="text" />
              <OutlinedInputBox placeholder="Phone No" inputType="text" />
              <OutlinedInputBox placeholder="Email" inputType="text" />
              <OutlinedInputBox placeholder="Birthday" inputType="text" />
              <OutlinedInputBox placeholder="Address" inputType="text" />
              <OutlinedInputBox placeholder="City" inputType="text" />
              <OutlinedInputBox placeholder="Country" inputType="text" />
              <BtnComponent
                placeholder="Next"
                onPress={() => {
                  navigation.navigate('NewPersonalCard2');
                }}
              />
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
