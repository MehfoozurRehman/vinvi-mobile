import React from 'react';
import {View, Text, Image} from 'react-native';
import {SECONDARY, FIFTH} from '../Constants/Colors';
export default function ProductCard({productPic, productName, productPrice}) {
  return (
    <View
      style={{
        display: 'flex',
        backgroundColor: FIFTH,
        width: '48%',
        marginBottom: 20,
        borderRadius: 8,
      }}>
      <Image
        source={productPic}
        style={{width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8}}
      />
      <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
        <Text
          style={{
            fontSize: 15,
            color: SECONDARY,
            marginBottom: 1,
            fontWeight: 'bold',
          }}>
          {productName}
        </Text>
        <Text style={{fontSize: 14, color: SECONDARY}}>{productPrice}</Text>
      </View>
    </View>
  );
}
