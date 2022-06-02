import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import BuisnessCard from '../Components/BuisnessCard';
import {View, Text} from 'react-native';
import {getBusinessCardAllActiveApiCall} from '../Apis/Repo';

export function BuisnessDataCardsListing({navigation}) {
  const [buisnessData, setBuisnessData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getBusinessCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setBuisnessData(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {buisnessData != null ? (
        <FlatList
          data={buisnessData}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <BuisnessCard
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
            />
          )}
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 300,
          }}>
          <Text style={{color: '#242424'}}>No Cards</Text>
        </View>
      )}
    </>
  );
}
