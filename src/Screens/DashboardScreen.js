import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTabsNavigator from '../Navigation/BottomTabNavigator';
import Svg, {Path} from 'react-native-svg';

export default function DashboardScreen({navigation}) {
  return <BottomTabsNavigator />;
}
