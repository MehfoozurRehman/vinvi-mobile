import React from 'react';
import Story from 'react-native-story';
import {TextInput} from 'react-native';
import {WHITE} from '../Constants/Colors';

export default function DashboardStories() {
  const stories = [
    {
      id: '4',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Ugur Erdal',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
    {
      id: '2',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Mustafa',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
    {
      id: '5',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Emre Yilmaz',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
    {
      id: '3',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
    {
      id: '8',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
    {
      id: '10',
      source: require('../Assets/pexels-photo-799443.jpeg'),
      user: 'Cenk Gun',
      avatar: require('../Assets/favpng_professional-avatar-job.png'),
    },
  ];
  return (
    <Story
      unPressedBorderColor="#e95950"
      pressedBorderColor="#ebebeb"
      stories={stories}
      footerComponent={
        <TextInput
          placeholder="Send message"
          placeholderTextColor="white"
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: WHITE,
            borderRadius: 50,
            paddingHorizontal: 20,
          }}
        />
      }
    />
  );
}
