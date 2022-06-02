import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import ContactDetailsRow from '../Components/ContactDetailsRow';
import Svg, {Path} from 'react-native-svg';

export function ContactDetails({data, arraycountry, setEdit}) {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: SECONDARY,
        paddingVertical: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
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
            color: WHITE,
          }}>
          Contact Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            setEdit(true);
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
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <ContactDetailsRow
        placeholder={data != null ? data.phoneNo : 'Phone No.'}
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
        placeholder={data != null ? data.email : 'Email'}
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
        placeholder={data != null ? data.address : 'Address'}
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
        placeholder={data != null ? arraycountry : 'Address'}
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
  );
}
