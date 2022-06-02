import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SECONDARY, FIFTH} from '../Constants/Colors';
import ContactDetailsRowReverse from '../Components/ContactDetailsRowReverseIndividual';
import Svg, {G, Path} from 'react-native-svg';

export function PersonalDetails({setIsEdit}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: FIFTH,
        paddingVertical: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        marginTop: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: SECONDARY,
          }}>
          Personal Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            setIsEdit(true);
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={21.004}
            height={21.009}
            viewBox="0 0 21.004 21.009">
            <Path
              data-name="Icon ionic-ios-settings"
              d="M23.77 15a2.7 2.7 0 011.73-2.52 10.713 10.713 0 00-1.3-3.123 2.739 2.739 0 01-1.1.235 2.7 2.7 0 01-2.467-3.8 10.681 10.681 0 00-3.118-1.3 2.7 2.7 0 01-5.043 0A10.713 10.713 0 009.357 5.8 2.7 2.7 0 016.89 9.6a2.65 2.65 0 01-1.1-.235 10.95 10.95 0 00-1.29 3.121 2.7 2.7 0 01.005 5.043 10.713 10.713 0 001.3 3.123 2.7 2.7 0 013.561 3.561 10.776 10.776 0 003.123 1.3 2.7 2.7 0 015.032 0 10.713 10.713 0 003.123-1.3 2.7 2.7 0 013.556-3.561 10.776 10.776 0 001.3-3.123A2.716 2.716 0 0123.77 15zm-8.719 4.37A4.376 4.376 0 1119.427 15a4.375 4.375 0 01-4.376 4.372z"
              transform="translate(-4.5 -4.5)"
              fill="#113066"
            />
          </Svg>
        </TouchableOpacity>
      </View>
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
  );
}
