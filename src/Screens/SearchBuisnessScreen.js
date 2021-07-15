import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import PickerComponent from '../Components/PickerComponent';
import BtnComponent from '../Components/BtnComponent';
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import Slider from '@react-native-community/slider';

export default class SearchBuisnessScreen extends Component {
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
        <Text>Name</Text>
        <InputBoxWOPlaceholder />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 1, marginRight: 10}}>
            <PickerComponent
              placeholder="Industry"
              itemLabels={('hello', 'Machenic')}
              itemValues={('hello', 'Machenic')}
            />
          </View>
          <View style={{flex: 1, marginLeft: 10}}>
            <PickerComponent
              placeholder="Area"
              itemLabels={('hello', 'Lahore')}
              itemValues={('hello', 'Lahore')}
            />
          </View>
        </View>
        <Text>Radius</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text>0km</Text>
          <Slider
            style={{flex: 1, height: 50}}
            minimumValue={0}
            maximumValue={30}
            minimumTrackTintColor={SECONDARY}
            maximumTrackTintColor={SECONDARY}
            thumbTintColor={SECONDARY}
          />
          <Text>30km</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <View style={{flex: 1}}>
            <PickerComponent
              placeholder="Employee"
              itemLabels={('hello', '100 -  200')}
              itemValues={('hello', '100 -  200')}
            />
          </View>
        </View>

        <BtnComponent
          placeholder="Search"
          onPress={() => {
            navigation.navigate('SearchResult');
          }}
        />
      </View>
    );
  }
}
