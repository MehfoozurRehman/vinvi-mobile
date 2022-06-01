import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import PickerComponent from '../Components/PickerComponent';
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import Slider from '@react-native-community/slider';

const SearchIndividualScreen = props => {
  const navigation = props.navigation;
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingBottom: 20,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <View
          style={{
            flex: 1,
            marginRight: 10,
          }}>
          <PickerComponent
            placeholder="Niche"
            itemLabels={('hello', 'Machenic')}
            itemValues={('hello', 'Machenic')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
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
          style={{
            flex: 1,
            height: 50,
          }}
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
        <View
          style={{
            flex: 1,
            marginRight: 10,
          }}>
          <PickerComponent
            placeholder="Habbits"
            itemLabels={('hello', 'Gardening')}
            itemValues={('hello', 'Gardening')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <PickerComponent
            placeholder="Education"
            itemLabels={('hello', 'Metric')}
            itemValues={('hello', 'Metric')}
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
        <View
          style={{
            flex: 1,
            marginRight: 10,
          }}>
          <PickerComponent
            placeholder="Interests"
            itemLabels={('hello', 'Football')}
            itemValues={('hello', 'Football')}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <PickerComponent
            placeholder="Skills"
            itemLabels={('hello', 'Programming')}
            itemValues={('hello', 'Programming')}
          />
        </View>
      </View>
      <Text>Name</Text>
      <InputBoxWOPlaceholder />
      <BtnComponent
        placeholder="Search"
        onPress={() => {
          navigation.navigate('SearchResult');
        }}
      />
    </View>
  );
};

export default SearchIndividualScreen;
