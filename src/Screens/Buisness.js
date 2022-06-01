import React, {useState, useEffect} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getPersonalCardAllActiveApiCall} from '../Apis/Repo';
import MyCardBuisness from '../Components/MyCardBuisness';
import {SECONDARY, WHITE} from '../Constants/Colors';

export function Buisness({navigation}) {
  const [selected, setSelected] = useState(null);
  let [userData, setUserData] = useState(null);
  const [data, setdata] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('user_data').then(response => {
      setUserData((userData = JSON.parse(response)));
      console.log('userdata', userData);
    });
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getPersonalCardAllActiveApiCall()
      .then(res => {
        console.log('res', res);
        setdata(res.data.result);
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  return (
    <>
      {data != null ? (
        <FlatList
          data={data}
          horizontal={false}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <MyCardBuisness
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
              item={item}
              key={index}
              index={index}
              selected={selected}
              setSelected={setSelected}
            />
          )}
          style={{flex: 1}}
          ListFooterComponent={
            <View style={{width: '100%', paddingHorizontal: 20}}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: SECONDARY,
                  marginVertical: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <Text style={{color: WHITE, fontSize: 14}}>Add new Card</Text>
              </TouchableOpacity>
            </View>
          }
        />
      ) : null}
    </>
  );
}
