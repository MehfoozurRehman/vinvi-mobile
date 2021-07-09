import React, {Component} from 'react';
import {View, ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import Header from '../Components/Header';
import DashboardStories from '../Components/DashboardStories';
import UserCard from '../Components/UserCard';
import {Height, Width} from '../Constants/Constants';

export default class HomeDashboardScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView style={{height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/dashboardbg.png')}
          style={{flex: 1, paddingBottom: 80}}>
          <Header
            navigation={navigation}
            variant="drawer"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: -65,
              marginBottom: 10,
            }}>
            <DashboardStories />
          </View>
          <ScrollView style={{flex: 1}}>
            <UserCard
              cta={true}
              variant="closed"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="broadcasted"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="open"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="open"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="open"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="open"
              navigation={navigation}
              navigationPath="Individual"
            />
            <UserCard
              cta={true}
              variant="open"
              navigation={navigation}
              navigationPath="Individual"
            />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
