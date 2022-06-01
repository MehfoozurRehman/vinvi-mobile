import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, FORTH} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import Svg, {Path} from 'react-native-svg';
import {Height, QRCODE_URL, Width} from '../Constants/Constants';
import _ from 'lodash';
import QRCode from 'react-native-qrcode-svg';
import {getPersonalCardByIdApiCall} from '../Apis/Repo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ContactDetails} from './ContactDetails';
import {Education} from './Education';
import {JobHistory} from './JobHistory';
import {PersonalDetails} from './PersonalDetails';
import {Skills} from './Skills';

export default function IndividualScreen(props) {
  let [userData, setUserData] = useState(null);
  const [data, setdata] = useState(' ');
  const [favorit, setFavorit] = useState(false);
  const [ID, setID] = useState(props.route.params.id);

  let arrayOccupation;
  arrayOccupation = _.find(data.personalCardMeta, {personalKey: 'occupation'});
  if (arrayOccupation) {
    arrayOccupation = arrayOccupation.personalValue;
  } else {
    arrayOccupation = 'Dummy occupation';
  }

  let arraycity;
  arraycity = _.find(data.personalCardMeta, {personalKey: 'city'});
  if (arraycity) {
    arraycity = arraycity.personalValue;
  } else {
    arraycity = 'Dummy city';
  }

  let arraycountry;
  arraycountry = _.find(data.personalCardMeta, {personalKey: 'country'});
  if (arraycountry) {
    arraycountry = arraycountry.personalValue;
  } else {
    arraycountry = 'Dummy country';
  }

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
    getPersonalCardByIdApiCall(ID)
      .then(res => {
        console.log('res', res.data.result);
        if (res.data.success) setdata(res.data.result);
        else alert('No record found.');
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  console.log('data here', data);

  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/individualbanner.png')}
          style={{width: '100%', height: 300}}>
          <Header
            navigation={props.navigation}
            variant="user"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
        </ImageBackground>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '100%',
            position: 'absolute',
            top: 270,
          }}>
          <View style={{marginLeft: 50}}>
            <Image
              source={require('../Assets/profilePic.png')}
              style={{width: 100, height: 100}}
            />
          </View>

          <View style={{paddingHorizontal: 10, marginBottom: 10}}>
            <Text style={{color: SECONDARY, fontSize: 20}}>{data.name}</Text>

            <View style={{marginLeft: 150, marginTop: -20}}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setFavorit(true);
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.295}
                  height={19.508}
                  viewBox="0 0 22.295 19.508">
                  <Path
                    data-name="Icon awesome-heart"
                    d="M20.131 1.334a5.955 5.955 0 00-8.13.592l-.858.884-.858-.884a5.954 5.954 0 00-8.125-.592 6.253 6.253 0 00-.431 9.053l8.426 8.7a1.365 1.365 0 001.973 0l8.426-8.7a6.249 6.249 0 00-.427-9.053z"
                    fill={favorit ? 'red' : '#CACFD2'}
                  />
                </Svg>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize: 14, color: FORTH}}>{arrayOccupation}</Text>
          </View>
        </View>
        <View style={{marginTop: 70, paddingHorizontal: 20, paddingBottom: 50}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 50,
                marginRight: 10,
                maxWidth: '45%',
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={8.248}
                height={15.401}
                viewBox="0 0 8.248 15.401">
                <Path
                  data-name="Icon awesome-facebook-f"
                  d="M7.708 8.663l.428-2.787H5.462V4.067a1.394 1.394 0 011.571-1.506h1.216V.188A14.826 14.826 0 006.091 0a3.4 3.4 0 00-3.642 3.751v2.125H0v2.787h2.449V15.4h3.013V8.663z"
                  fill="#066aff"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={18.12}
                height={14.936}
                viewBox="0 0 18.12 14.936">
                <Path
                  data-name="Icon awesome-twitter"
                  d="M16.257 3.719c.012.163.012.327.012.49A10.578 10.578 0 015.7 14.936 10.383 10.383 0 010 13.244a7.571 7.571 0 00.9.047 7.368 7.368 0 004.61-1.61 3.728 3.728 0 01-3.472-2.614 4.616 4.616 0 00.7.058 3.873 3.873 0 00.977-.128 3.756 3.756 0 01-2.978-3.7v-.046a3.7 3.7 0 001.679.478A3.812 3.812 0 011.266.688a10.506 10.506 0 007.656 3.944 4.316 4.316 0 01-.092-.863A3.74 3.74 0 0112.544 0a3.68 3.68 0 012.713 1.19 7.246 7.246 0 002.357-.91 3.749 3.749 0 01-1.633 2.077 7.359 7.359 0 002.139-.583 8.049 8.049 0 01-1.863 1.945z"
                  fill="#09f"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.627}
                height={16.624}
                viewBox="0 0 16.627 16.624">
                <Path
                  data-name="Icon awesome-instagram"
                  d="M8.315 4.049a4.262 4.262 0 104.262 4.262 4.255 4.255 0 00-4.262-4.262zm0 7.033a2.771 2.771 0 112.771-2.771 2.776 2.776 0 01-2.771 2.772zm5.431-7.207a.994.994 0 11-.994-.994.992.992 0 01.994.994zm2.823 1.009a4.92 4.92 0 00-1.343-3.483A4.952 4.952 0 0011.743.062c-1.372-.078-5.486-.078-6.859 0a4.945 4.945 0 00-3.479 1.335A4.936 4.936 0 00.058 4.88c-.078 1.372-.078 5.486 0 6.859a4.92 4.92 0 001.347 3.483 4.958 4.958 0 003.479 1.34c1.372.078 5.486.078 6.859 0a4.92 4.92 0 003.483-1.343 4.952 4.952 0 001.343-3.483c.078-1.372.078-5.483 0-6.855zm-1.773 8.328a2.805 2.805 0 01-1.58 1.58c-1.094.434-3.691.334-4.9.334s-3.81.1-4.9-.334a2.805 2.805 0 01-1.58-1.58c-.431-1.095-.331-3.691-.331-4.9s-.1-3.81.334-4.9a2.805 2.805 0 011.58-1.58c1.086-.435 3.686-.335 4.896-.335s3.81-.1 4.9.334a2.805 2.805 0 011.58 1.58c.434 1.094.334 3.691.334 4.9s.101 3.81-.333 4.901z"
                  fill="#f90"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={17.353}
                height={12.201}
                viewBox="0 0 17.353 12.201">
                <Path
                  data-name="Icon awesome-youtube"
                  d="M16.99 1.909A2.18 2.18 0 0015.456.365 51.528 51.528 0 008.676 0a51.528 51.528 0 00-6.78.365A2.18 2.18 0 00.363 1.909 22.874 22.874 0 000 6.109a22.874 22.874 0 00.363 4.2 2.148 2.148 0 001.534 1.519 51.528 51.528 0 006.78.365 51.528 51.528 0 006.78-.365 2.148 2.148 0 001.534-1.519 22.874 22.874 0 00.363-4.2 22.874 22.874 0 00-.363-4.2zM6.902 8.693v-5.16l4.535 2.58-4.535 2.58z"
                  fill="red"
                />
              </Svg>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16.255}
                height={15.282}
                viewBox="0 0 16.255 15.282">
                <Path
                  data-name="Icon awesome-snapchat-ghost"
                  d="M16.218 11.98c-.165.386-.865.67-2.139.867a5.954 5.954 0 00-.207.761.368.368 0 01-.385.282h-.009c-.3 0-.61-.137-1.233-.137a2.513 2.513 0 00-1.786.654 3.576 3.576 0 01-2.35.87 3.646 3.646 0 01-2.314-.87 2.51 2.51 0 00-1.785-.655 11.991 11.991 0 00-1.233.15.377.377 0 01-.394-.287 5.881 5.881 0 00-.207-.766c-.657-.1-2.137-.36-2.175-1.021a.337.337 0 01.282-.351 4.779 4.779 0 003.245-2.729l.008-.016a.722.722 0 00.078-.6c-.16-.378-.853-.513-1.145-.628-.753-.3-.858-.639-.813-.873A.817.817 0 012.7 6.144a1.817 1.817 0 00.748.2.648.648 0 00.316-.069 9.479 9.479 0 01.181-3.682A4.325 4.325 0 017.963.003h.321a4.3 4.3 0 014.023 2.589 9.475 9.475 0 01.181 3.683.622.622 0 00.273.068 1.9 1.9 0 00.7-.2.859.859 0 01.65 0 .659.659 0 01.495.567c.006.309-.271.577-.822.794a3.214 3.214 0 01-.236.08c-.311.1-.781.248-.908.548a.721.721 0 00.078.6l.008.016a4.778 4.778 0 003.246 2.728.346.346 0 01.246.504z"
                  fill="#ffd300"
                />
              </Svg>
            </View>
            <BtnComponent
              placeholder="Connect"
              onPress={() => {
                props.navigation.navigate('Messages');
              }}
              width={true}
              widthValue="40%"
            />
          </View>
          <Text
            style={{
              color: SECONDARY,
              fontSize: 14,
              textAlign: 'center',
              marginBottom: 20,
            }}>
            Out beyond ideas of wrongdoing and rightdoing there is a field. I'll
            meet you there. When the soul lies down in that grass the world is
            too full to talk about.
          </Text>
          <ContactDetails data={data} arraycountry={arraycountry} />
          <Education />
          <JobHistory />
          <PersonalDetails />
          <Skills />
          <View
            style={{width: '100%', marginVertical: 70, alignItems: 'center'}}>
            <QRCode
              value={QRCODE_URL}
              logoSize={30}
              logoBackgroundColor="transparent"
              color={SECONDARY}
            />
          </View>
          <BtnComponent placeholder="Block" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
