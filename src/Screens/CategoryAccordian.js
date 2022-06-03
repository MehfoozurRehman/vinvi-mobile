import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {ProductCard} from './ProductCard';

export function CategoryAccordian({setSelected, selected, index}) {
  return (
    <View
      style={{
        marginBottom: 15,
        width: '100%',
      }}>
      <TouchableOpacity
        onPress={() => {
          selected === index ? setSelected(false) : setSelected(index);
        }}
        style={{
          backgroundColor: '#F3F3F3',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <Text
          style={{
            color: '#113066',
          }}>
          Category Name
        </Text>
        <Text
          style={{
            color: '#113066',
          }}>
          7 Products
        </Text>
      </TouchableOpacity>
      {selected === index ? (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      ) : null}
    </View>
  );
}
