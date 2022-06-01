import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {SECONDARY} from '../Constants/Colors';

export default function InputBoxWOPlaceholder() {
  const [focus, setFocus] = useState(false);
  let borderWidthValue;
  if (focus) {
    borderWidthValue = 1;
  } else if (!focus) {
    borderWidthValue = 0;
  }
  return (
    <TextInput
      placeholder=""
      onFocus={() => {
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      style={{
        marginTop: 5,
        height: 45,
        width: '100%',
        borderColor: SECONDARY,
        borderWidth: borderWidthValue,
        backgroundColor: '#eeeeee',
        borderRadius: 5,
        paddingHorizontal: 20,
      }}
    />
  );
}
