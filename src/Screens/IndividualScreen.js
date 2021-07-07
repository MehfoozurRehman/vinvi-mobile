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
  SafeAreaView,
} from 'react-native';
import {
  SECONDARY,
  LIGHT_TEXT_COLOR,
  TEXT_COLOR,
  WHITE,
  FIFTH,
  FORTH,
} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import Header from '../Components/Header';
import UserCard from '../Components/UserCard';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

function ContactDetailsRow({placeholder, svg}) {
  return (
    <View
      style={{
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
      }}>
      {svg}
      <Text style={{fontSize: 14, color: WHITE, marginLeft: 10}}>
        {placeholder}
      </Text>
    </View>
  );
}

function ContactDetailsRowReverse({placeholder, svg}) {
  return (
    <View
      style={{
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
      }}>
      {svg}
      <Text style={{fontSize: 14, color: SECONDARY, marginLeft: 10}}>
        {placeholder}
      </Text>
    </View>
  );
}

function SkillTag({placeholder}) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: SECONDARY,
        marginRight: 10,
        marginBottom: 10,
      }}>
      <Text style={{color: SECONDARY, fontSize: 12}}>{placeholder}</Text>
    </View>
  );
}

export default function IndividualScreen({navigation}) {
  return (
    <SafeAreaView style={{height: Height, width: Width}}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={require('../Assets/individualbanner.png')}
          style={{width: '100%', height: 300}}>
          <Header
            navigation={navigation}
            variant="dark"
            headerName="Saved"
            onPress={() => {
              navigation.navigate('Home');
            }}
            headerIcon={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={22.295}
                height={19.508}
                viewBox="0 0 22.295 19.508">
                <Path
                  data-name="Icon awesome-heart"
                  d="M20.131 1.334a5.955 5.955 0 00-8.13.592l-.858.884-.858-.884a5.954 5.954 0 00-8.125-.592 6.253 6.253 0 00-.431 9.053l8.426 8.7a1.365 1.365 0 001.973 0l8.426-8.7a6.249 6.249 0 00-.427-9.053z"
                  fill="#fff"
                />
              </Svg>
            }
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
          <Image
            source={require('../Assets/profilePic.png')}
            style={{width: 100, height: 100}}
          />
          <View style={{paddingHorizontal: 20, marginBottom: 10}}>
            <Text style={{color: SECONDARY, fontSize: 20}}>Umer Altaf</Text>
            <Text style={{fontSize: 14, color: FORTH}}>Software Engineer</Text>
          </View>
        </View>
        <View
          style={{marginTop: 100, paddingHorizontal: 20, paddingBottom: 50}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
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
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: SECONDARY,
                backgroundColor: WHITE,
                flex: 1,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginRight: 10,
              }}>
              <Text style={{color: SECONDARY, fontSize: 14}}>Send Request</Text>
            </TouchableOpacity>
            <BtnComponent
              placeholder="Connect"
              onPress={() => {}}
              width={true}
              widthValue="35%"
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
          <View
            style={{
              width: '100%',
              backgroundColor: SECONDARY,
              paddingVertical: 20,
              paddingLeft: 20,
              paddingRight: 10,
              borderRadius: 8,
            }}>
            <Text style={{fontSize: 20, color: WHITE, marginBottom: 8}}>
              Contact Details
            </Text>
            <ContactDetailsRow
              placeholder="092 545 454 4534"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13.618}
                  height={13.618}
                  viewBox="0 0 13.618 13.618">
                  <Path
                    data-name="Icon awesome-phone-alt"
                    d="M13.229 9.623L10.25 8.347a.638.638 0 00-.745.184l-1.319 1.611a9.859 9.859 0 01-4.712-4.713L5.085 4.11a.637.637 0 00.184-.745L3.992.386a.643.643 0 00-.731-.37L.495.655A.638.638 0 000 1.277a12.34 12.34 0 0012.341 12.341.638.638 0 00.622-.495l.638-2.766a.646.646 0 00-.373-.734z"
                    fill="#fff"
                  />
                </Svg>
              }
            />
            <ContactDetailsRow
              placeholder="umar@gmail.com"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.862}
                  height={11.382}
                  viewBox="0 0 16.862 11.382">
                  <Path
                    data-name="Icon zocial-email"
                    d="M0 10.374V1.008Q0 .992.049.699l5.512 4.716-5.5 5.285a1.378 1.378 0 01-.065-.325zM.728.049A.7.7 0 011.004 0h14.85a.921.921 0 01.293.049l-5.529 4.732-.732.585-1.447 1.187-1.447-1.187-.732-.585zm.02 11.283l5.545-5.317 2.146 1.74 2.146-1.74 5.543 5.317a.781.781 0 01-.276.049H1.008a.736.736 0 01-.26-.049zm10.569-5.917l5.5-4.716a.971.971 0 01.049.309v9.366a1.246 1.246 0 01-.049.325z"
                    fill="#fff"
                  />
                </Svg>
              }
            />
            <ContactDetailsRow
              placeholder="Street # 54, House #54, Housing Colony"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15.24}
                  height={15.24}
                  viewBox="0 0 15.24 15.24">
                  <Path
                    data-name="Icon awesome-location-arrow"
                    d="M13.232.1L.856 5.817a1.443 1.443 0 00.571 2.761h5.236v5.236a1.443 1.443 0 002.761.571l5.712-12.376a1.485 1.485 0 00-1.9-1.9z"
                    fill="#fff"
                  />
                </Svg>
              }
            />
            <ContactDetailsRow
              placeholder="Lahore, Pakistan"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.72}
                  height={17.649}
                  viewBox="0 0 16.72 17.649">
                  <Path
                    data-name="Icon material-location-city"
                    d="M11.147 8.36V2.787L8.36 0 5.573 2.787v1.858H0v13h16.72V8.36zm-7.431 7.431H1.858v-1.857h1.858zm0-3.716H1.858v-1.857h1.858zm0-3.716H1.858V6.5h1.858zm5.573 7.431H7.431v-1.856h1.858zm0-3.716H7.431v-1.856h1.858zm0-3.716H7.431V6.5h1.858zm0-3.716H7.431V2.787h1.858zm5.573 11.147H13v-1.855h1.858zm0-3.716H13v-1.855h1.858z"
                    fill="#fff"
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: FIFTH,
              paddingVertical: 20,
              paddingLeft: 20,
              paddingRight: 10,
              borderRadius: 8,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: SECONDARY, marginBottom: 8}}>
              Personal Details
            </Text>
            <ContactDetailsRowReverse
              placeholder="Graduate"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16.798}
                  height={13.712}
                  viewBox="0 0 16.798 13.712">
                  <G data-name="Group 597" fill="#151269">
                    <Path
                      data-name="Path 2227"
                      d="M9.477 10.102a2.186 2.186 0 01-2.156 0L2.44 7.108s-.441-.27-.441.342v2.989c0 1.575 2.865 3.272 6.4 3.272s6.4-1.7 6.4-3.272V7.281c0-.491-.313-.251-.313-.251z"
                    />
                    <Path
                      data-name="Path 2228"
                      d="M16.517 4.727a.452.452 0 000-.836L9.081.172a1.434 1.434 0 00-1.364 0L.281 3.891a.452.452 0 000 .836l7.436 4.56a1.434 1.434 0 001.364 0"
                    />
                    <Path
                      data-name="Path 2229"
                      d="M16.209 11.486V6.449s0-.239-.138-.16a4.115 4.115 0 00-.49.3.423.423 0 00-.088.319v4.573a.134.134 0 01-.082.112.87.87 0 10.878 0 .13.13 0 01-.08-.107z"
                    />
                  </G>
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Swimming, Dancing, Gardening"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17.028}
                  height={15.211}
                  viewBox="0 0 17.028 15.211">
                  <G fill="#151269">
                    <Path
                      data-name="Path 2230"
                      d="M14.909 10.949l2.119-2.119-2.119-2.119.341-.341a1.515 1.515 0 00-2.142-2.143l-.341.341-2.119-2.119-.625.625v.988a2.514 2.514 0 010 4.891v3.065H8.189l-.366.366 2.825 2.825 2.119-2.119.294.294a1.515 1.515 0 002.143-2.143zm0 0"
                    />
                    <Path
                      data-name="Path 2231"
                      d="M9.024 11.021v-3h.416a1.515 1.515 0 100-3.03h-.416V2h-3v-.485a1.515 1.515 0 10-3.03 0V2H.001v3h.416a1.517 1.517 0 011.484 1.21.513.513 0 010 .6A1.517 1.517 0 01.417 8.025H.001v3h3v-.483a1.515 1.515 0 013.03 0v.483zm0 0"
                    />
                  </G>
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Traveling, Painting, Directing"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17.928}
                  height={17.928}
                  viewBox="0 0 17.928 17.928">
                  <Path
                    data-name="Path 2232"
                    d="M17.4 15.584h-.244v-1.489a.529.529 0 00-.651-.514 8.046 8.046 0 01-2.126.291c-1.233-.016-1.753-.261-3.224-.375a2.5 2.5 0 00-2.191.979 2.5 2.5 0 00-2.191-.979c-1.469.114-1.992.359-3.224.375a8.046 8.046 0 01-2.126-.291.529.529 0 00-.651.514v1.489H.528a.528.528 0 100 1.056h5.607a1.82 1.82 0 001.738 1.288h2.18a1.82 1.82 0 001.738-1.288H17.4a.528.528 0 100-1.056z"
                    fill="#151269"
                  />
                  <G data-name="Group 598" fill="#151269">
                    <Path
                      data-name="Path 2233"
                      d="M6.198 1.735a3.979 3.979 0 00-.363 5.232 5.753 5.753 0 011.008 2.081h1.65v-3.11a.525.525 0 011.05 0v3.109h1.652a5.864 5.864 0 011.015-2.092 3.991 3.991 0 00-6.012-5.22z"
                    />
                    <Path
                      data-name="Path 2234"
                      d="M3.482 4.562a.525.525 0 100-1.05H1.731a.525.525 0 100 1.05z"
                    />
                    <Path
                      data-name="Path 2235"
                      d="M16.1 7.096l-1.512-.886a.525.525 0 10-.533.9l1.509.888a.525.525 0 10.533-.9z"
                    />
                    <Path
                      data-name="Path 2236"
                      d="M3.445 6.21l-1.509.888a.525.525 0 10.533.9l1.513-.888a.525.525 0 10-.533-.9z"
                    />
                    <Path
                      data-name="Path 2237"
                      d="M14.588 1.866l1.509-.888a.525.525 0 10-.533-.9l-1.506.883a.525.525 0 10.533.9z"
                    />
                    <Path
                      data-name="Path 2238"
                      d="M3.981.961L2.469.073a.525.525 0 10-.533.9l1.509.888a.525.525 0 10.533-.9z"
                    />
                    <Path
                      data-name="Path 2239"
                      d="M16.305 3.514h-1.751a.525.525 0 100 1.05h1.751a.525.525 0 100-1.05z"
                    />
                    <Path
                      data-name="Path 2240"
                      d="M6.949 10.096v.559a1.5 1.5 0 001.525 1.474h1.082a1.5 1.5 0 001.525-1.463v-.57z"
                    />
                  </G>
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Achievement 1 Here, Achievement 2 Here"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={13.155}
                  height={18.637}
                  viewBox="0 0 13.155 18.637">
                  <G fill="#151269">
                    <Path d="M10.427 5.423C11.41 3.208 11.707 2.57 12.833 0h-1.576l-2.14 4.817a7.641 7.641 0 011.31.606zM6.578 4.385a7.677 7.677 0 011.469.141L10.059 0h-1.61L6.575 4.242 4.697 0h-1.6l2.012 4.527a7.677 7.677 0 011.469-.142zM4.038 4.817L1.897 0H.308l2.416 5.425a7.645 7.645 0 011.314-.608zM6.578 5.481a6.578 6.578 0 106.578 6.578 6.585 6.585 0 00-6.578-6.578zm-2.109 9.587l.4-2.348-1.706-1.663 2.357-.343 1.054-2.136 1.054 2.136 2.357.343-1.706 1.663.4 2.348-2.109-1.109zm2.109-2.347l.653.343-.125-.727.528-.515-.73-.106-.326-.661-.326.661-.73.106.528.515-.125.727z" />
                  </G>
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="DOB - 5 May, 1992"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15.748}
                  height={17.498}
                  viewBox="0 0 15.748 17.498">
                  <Path
                    data-name="Icon material-date-range"
                    d="M5.249 7.874H3.5v1.75h1.75zm3.5 0H7v1.75h1.75zm3.5 0H10.5v1.75h1.75zM14 1.75h-.875V0h-1.75v1.75h-7V0h-1.75v1.75H1.75A1.742 1.742 0 00.009 3.5L0 15.748A1.749 1.749 0 001.75 17.5H14a1.755 1.755 0 001.75-1.75V3.5A1.755 1.755 0 0014 1.75zm0 14H1.75V6.124H14z"
                    fill="#151269"
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: FIFTH,
              paddingVertical: 20,
              paddingLeft: 20,
              paddingRight: 10,
              borderRadius: 8,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: SECONDARY, marginBottom: 8}}>
              Skills
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: FIFTH,
              paddingVertical: 20,
              paddingLeft: 20,
              paddingRight: 10,
              borderRadius: 8,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: SECONDARY, marginBottom: 8}}>
              Skills
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
              <SkillTag placeholder="Skill Name" />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: FIFTH,
              paddingVertical: 20,
              paddingLeft: 20,
              paddingRight: 10,
              borderRadius: 8,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: SECONDARY, marginBottom: 8}}>
              Protfolio
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Image
                source={require('../Assets/portfolioPic.png')}
                style={{marginRight: 10, marginBottom: 10}}
              />
              <Image
                source={require('../Assets/portfolioPic.png')}
                style={{marginRight: 10, marginBottom: 10}}
              />
              <Image
                source={require('../Assets/portfolioPic.png')}
                style={{marginRight: 10, marginBottom: 10}}
              />
              <Image
                source={require('../Assets/portfolioPic.png')}
                style={{marginRight: 10, marginBottom: 10}}
              />
              <Image
                source={require('../Assets/portfolioPic.png')}
                style={{marginRight: 10, marginBottom: 10}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
