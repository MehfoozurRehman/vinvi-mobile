import React, {Component} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Header from '../Components/Header';
import TopTabsNavigator from '../Navigation/TopTabsNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

export default class SearchScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/screenbg.png')}
          style={{flex: 1, height: 800}}>
          <ScrollView style={{flex: 1}}>
            <Header
              navigation={navigation}
              variant="dark"
              headerIcon={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20.936}
                  height={20.828}
                  viewBox="0 0 24.936 25.828">
                  <Path
                    d="M24.557 23.525l-6.147-6.393a10.424 10.424 0 10-7.982 3.724 10.316 10.316 0 005.974-1.887l6.194 6.442a1.36 1.36 0 101.96-1.886zM10.428 2.72a7.708 7.708 0 11-7.712 7.708 7.716 7.716 0 017.712-7.708z"
                    fill="#ffffff"
                  />
                </Svg>
              }
              headerName="Search"
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            />
            <TopTabsNavigator variant="search" />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
