import React, {useState, useEffect} from 'react';
import IndividualCard from '../Components/IndividualCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FlatList} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {getPersonalCardAllActiveApiCall} from '../Apis/Repo';

export function IndividualDataCardsListing({navigation}) {
  const [individualData, setIndividualData] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getPersonalCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setIndividualData(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  }, []);
  return (
    <>
      {individualData != null ? (
        <FlatList
          data={individualData}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <IndividualCard
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
