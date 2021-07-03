import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Svg, {Path, G, Rect} from 'react-native-svg';
import {SECONDARY, WHITE} from '../Constants/Colors';

export default function Header({
  navigation,
  variant,
  headerName,
  headerIcon,
  onPress,
}) {
  let isheaderName;
  let isheaderIcon;
  if (headerName) {
    isheaderName = true;
  } else {
    isheaderName = false;
  }
  if (headerIcon) {
    isheaderIcon = true;
  } else {
    isheaderIcon = false;
  }
  if (variant === 'light') {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.957}
            height={20.957}
            viewBox="0 0 17.957 17.957">
            <Path
              data-name="Icon material-arrow_back"
              d="M17.957 7.856H4.3l6.274-6.274L8.979 0 0 8.979l8.979 8.979 1.582-1.582L4.3 10.1h13.657z"
              fill={SECONDARY}
            />
          </Svg>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {isheaderIcon ? {headerIcon} : null}
          {isheaderName ? (
            <Text style={{marginLeft: 10, fontSize: 20, color: SECONDARY}}>
              {headerName}
            </Text>
          ) : null}
        </View>
      </View>
    );
  } else if (variant === 'dark') {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20,
        }}>
        <TouchableOpacity onPress={onPress}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.957}
            height={20.957}
            viewBox="0 0 17.957 17.957">
            <Path
              data-name="Icon material-arrow_back"
              d="M17.957 7.856H4.3l6.274-6.274L8.979 0 0 8.979l8.979 8.979 1.582-1.582L4.3 10.1h13.657z"
              fill={WHITE}
            />
          </Svg>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {isheaderIcon ? {headerIcon} : null}
          {isheaderName ? (
            <Text style={{marginLeft: 10, fontSize: 20, color: WHITE}}>
              {headerName}
            </Text>
          ) : null}
        </View>
      </View>
    );
  } else if (variant === 'drawer') {
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 25,
        }}>
        <TouchableOpacity
        // onPress={() => {
        //   navigation.navigate('Login');
        // }}
        >
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20">
            <G
              data-name="Group 588"
              transform="translate(-37 -37)"
              fill={WHITE}>
              <Rect
                data-name="Rectangle 1461"
                width={13}
                height={4}
                rx={2}
                transform="translate(37 45)"
              />
              <Rect
                data-name="Rectangle 1507"
                width={20}
                height={3}
                rx={1.5}
                transform="translate(37 37)"
              />
              <Rect
                data-name="Rectangle 1462"
                width={20}
                height={3}
                rx={1.5}
                transform="translate(37 54)"
              />
            </G>
          </Svg>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={24.936}
            height={25.828}
            viewBox="0 0 24.936 25.828">
            <Path
              d="M24.557 23.525l-6.147-6.393a10.424 10.424 0 10-7.982 3.724 10.316 10.316 0 005.974-1.887l6.194 6.442a1.36 1.36 0 101.96-1.886zM10.428 2.72a7.708 7.708 0 11-7.712 7.708 7.716 7.716 0 017.712-7.708z"
              fill={WHITE}
            />
          </Svg>
        </TouchableOpacity>
      </View>
    );
  }
}
