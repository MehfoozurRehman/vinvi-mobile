import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent({placeholder, itemValues, itemLabels}) {
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
