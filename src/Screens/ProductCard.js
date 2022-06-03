import React from 'react';
import {View, Text, Image} from 'react-native';

export function ProductCard({}) {
  return (
    <View
      style={{
        width: '46%',
        marginBottom: 10,
      }}>
      <Image
        source={require('../Assets/productPic.png')}
        style={{width: '100%', resizeMode: 'contain'}}
      />
      <View
        style={{
          marginTop: 10,
          width: '100%',
        }}>
        <Text
          style={{
            color: '#113066',
          }}>
          Product Name
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#113066',
            }}>
            Category
          </Text>
          <Text
            style={{
              color: '#113066',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            $54
          </Text>
        </View>
      </View>
    </View>
  );
}
