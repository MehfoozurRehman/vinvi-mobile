import React from 'react';
import {View, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import PickerComponent from '../Components/PickerComponent';
import BtnComponent from '../Components/BtnComponent';
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import Slider from '@react-native-community/slider';

export default function SearchBuisnessScreen(props) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingBottom: 20,
        height: '100%',
      }}>
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
            placeholder="Age"
            itemLabels={('hello', '20')}
            itemValues={('hello1', '20')}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <PickerComponent
            placeholder="Gender"
            itemLabels={('hello', 'Male')}
            itemValues={('hello', 'Male')}
          />
        </View>
      </View>
      <Text>Name</Text>
      <InputBoxWOPlaceholder />
      <BtnComponent
        placeholder="Search"
        onPress={() => {
          props.navigation.navigate('SearchResult');
        }}
      />
    </View>
  );
}
