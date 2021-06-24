import React from 'react';

import {View, Text, Button} from 'react-native';
import {
  DefaultTheme,
  Provider as PaperProvider,
  TextInput,
} from 'react-native-paper';

import QRCode from 'react-native-qrcode-svg';

import {QRCodeValue} from '../Constants';
import {THIRD} from '../Colors';

export default function HomeScreen() {
  const [text, setText] = React.useState('');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: {THIRD},
      }}>
      <TextInput
        mode="outlined"
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#eeeeee',
        }}
        outlineColor="transparent"
        selectionColor="#242424"
      />
      <QRCode value={QRCodeValue} />
    </View>
  );
}
