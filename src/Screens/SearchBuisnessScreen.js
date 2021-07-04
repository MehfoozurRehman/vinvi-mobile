import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import OutlinedInputBox from '../Components/OutlinedInputBox';
import InputBoxWOPlaceholder from '../Components/InputBoxWOPlaceholder';
import UploadBtn from '../Components/UploadBtn';
import NewCardStepPanel from '../Components/NewCardStepPanel';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

function PickerComponent({placeholder, itemValues, itemLabels}) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <>
      <Text>{placeholder}</Text>
      <View
        style={{
          height: 40,
          backgroundColor: '#eeeeee',
          borderRadius: 5,
          marginTop: 5,
        }}>
        <Picker
          style={{marginTop: -6}}
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label={itemLabels} value={itemValues} />
        </Picker>
      </View>
    </>
  );
}

export default function SearchBuisnessScreen({navigation}) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: WHITE,
        paddingBottom: 20,
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
          navigation.navigate('');
        }}
      />
    </View>
  );
}
