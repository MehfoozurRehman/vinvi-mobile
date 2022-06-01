import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {SECONDARY} from '../Constants/Colors';

const styles = StyleSheet.create({
  codeFieldRoot: {marginVertical: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 20,
    borderWidth: 1,
    borderColor: SECONDARY,
    textAlign: 'center',
    borderRadius: 5,
    color: SECONDARY,
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 6;

function PhoneVerificationCell({onChange}) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onChangeText = (value = props.text) => {
    setValue(value);
    onChange(value);
  };

  return (
    <CodeField
      ref={ref}
      {...props}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      onChangeText={onChangeText}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
}

export default PhoneVerificationCell;
