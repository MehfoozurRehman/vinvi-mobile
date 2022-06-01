import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import BroadcastCard from '../Components/BroadcastCard';
import Header from '../Components/Header';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';
import Slider from '@react-native-community/slider';

export default class BroadCastScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/screenbg.png')}
          style={{flex: 1, paddingBottom: 20}}>
          <Header
            navigation={navigation}
            variant="dark2"
            headerName="Broadcast"
            onPress={() => {
              navigation.navigate('Home');
            }}
            headerIcon={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={21.263}
                height={17.011}
                viewBox="0 0 21.263 17.011">
                <Path
                  data-name="Icon awesome-broadcast-tower"
                  d="M5.015 6.379h1.12a.524.524 0 00.494-.7 4.16 4.16 0 010-2.845.523.523 0 00-.494-.7h-1.12A.53.53 0 004.5 2.5a6.263 6.263 0 000 3.506.53.53 0 00.515.373zM2.987.775A.526.526 0 002.524 0H1.35a.538.538 0 00-.49.309A9.491 9.491 0 000 4.253 9.259 9.259 0 00.887 8.2a.535.535 0 00.485.3H2.53a.526.526 0 00.463-.776A7.409 7.409 0 012.987.775zM20.4.309A.537.537 0 0019.912 0h-1.177a.525.525 0 00-.466.772 7.451 7.451 0 01.009 6.951.527.527 0 00.462.781h1.17a.537.537 0 00.49-.304 9.452 9.452 0 000-7.888zm-4.152 1.817h-1.12a.524.524 0 00-.494.7 4.16 4.16 0 010 2.845.523.523 0 00.494.7h1.121a.53.53 0 00.512-.373 6.262 6.262 0 000-3.506.529.529 0 00-.513-.366zm-3.863 3.327a2.125 2.125 0 10-3.506 0L4.543 15.865a.532.532 0 00.286.7l.98.409a.531.531 0 00.695-.286l1.634-3.925h4.986l1.635 3.925a.531.531 0 00.695.286l.98-.409a.532.532 0 00.286-.7L12.385 5.453zm-3.36 5.179l1.607-3.86 1.607 3.86H9.024z"
                  fill={WHITE}
                />
              </Svg>
            }
          />
          <View
            style={{
              backgroundColor: WHITE,
              padding: 20,
              borderRadius: 5,
              marginHorizontal: 20,
            }}>
            <Text>Radius</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>0km</Text>
              <Slider
                style={{flex: 1, height: 50}}
                minimumValue={0}
                maximumValue={30}
                minimumTrackTintColor={SECONDARY}
                maximumTrackTintColor={SECONDARY}
                thumbTintColor={SECONDARY}
              />
              <Text>30km</Text>
            </View>
          </View>
          <ScrollView style={{flex: 1}}>
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
            <BroadcastCard status={true} />
            <BroadcastCard status={false} />
          </ScrollView>
          <View style={{marginHorizontal: 20}}>
            <BtnComponent placeholder="Broadcast" onPress={() => {}} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
