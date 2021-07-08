import React from 'react';
import {View, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import PickerComponent from '../Components/PickerComponent';
import BtnComponent from '../Components/BtnComponent';
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import Slider from '@react-native-community/slider';

export default function SearchBuisnessScreen({navigation}) {
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
            itemLabels={('hello', 'hi')}
            itemValues={('hello', 'hi')}
          />
        </View>
        <View style={{flex: 1, marginLeft: 10}}>
          <PickerComponent
            placeholder="Area"
            itemLabels={('hello', 'hi')}
            itemValues={('hello', 'hi')}
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
            itemLabels={('hello', 'hi')}
            itemValues={('hello', 'hi')}
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
