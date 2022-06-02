import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function PickerComponent({
  placeholder,
  itemValues,
  itemLabels,
  inline,
}) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef();

  return (
    <>
      {inline ? null : <Text>{placeholder}</Text>}
      <View
        style={{
          height: inline ? 45 : 40,
          backgroundColor: '#eeeeee',
          borderRadius: 5,
          marginTop: 5,
        }}>
        <Picker
          style={{marginTop: -4, fontSize: 13}}
          ref={pickerRef}
          selectedValue={selectedLanguage}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          <Picker.Item
            label={itemLabels}
            value={itemValues}
            style={{fontSize: 14}}
          />
        </Picker>
      </View>
    </>
  );
}
