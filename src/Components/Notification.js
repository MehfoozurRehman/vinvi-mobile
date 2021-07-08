import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';

export default function Notification({status}) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        backgroundColor: status ? SECONDARY : '#82B1CF',
        borderRadius: 8,
        marginBottom: 20,
      }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={19.628}
        height={24.002}
        viewBox="0 0 19.628 24.002">
        <G data-name="Icon ionic-ios-notifications-outline" fill={WHITE}>
          <Path
            data-name="Path 2248"
            d="M12.046 20.477a.862.862 0 00-.845.679 1.667 1.667 0 01-.333.725 1.257 1.257 0 01-1.071.392 1.278 1.278 0 01-1.071-.392 1.667 1.667 0 01-.333-.725.862.862 0 00-.845-.679.867.867 0 00-.845 1.058 2.972 2.972 0 003.093 2.468 2.967 2.967 0 003.093-2.468.871.871 0 00-.845-1.058z"
          />
          <Path
            data-name="Path 2249"
            d="M19.382 17.351c-.946-1.189-2.806-1.886-2.806-7.208 0-5.463-2.53-7.659-4.888-8.186-.221-.053-.381-.123-.381-.345v-.17A1.471 1.471 0 009.834 0h-.037a1.471 1.471 0 00-1.472 1.441v.17c0 .217-.16.293-.381.345-2.364.533-4.888 2.723-4.888 8.186 0 5.323-1.861 6.014-2.806 7.208a1.16 1.16 0 00.975 1.863h17.2a1.16 1.16 0 00.957-1.862zm-2.395.34H2.668a.256.256 0 01-.2-.427 7.061 7.061 0 001.289-1.956 12.719 12.719 0 00.878-5.165A8.657 8.657 0 015.916 5.06a3.949 3.949 0 012.376-1.616 2.178 2.178 0 001.142-.615.5.5 0 01.731-.012 2.254 2.254 0 001.154.627 3.949 3.949 0 012.377 1.616 8.657 8.657 0 011.283 5.083 12.719 12.719 0 00.878 5.165 7.145 7.145 0 001.32 1.985.241.241 0 01-.19.398z"
          />
        </G>
      </Svg>
      <View
        style={{
          display: 'flex',
          paddingHorizontal: 20,
          alignItems: 'flex-end',
        }}>
        <Text style={{color: WHITE}}>4/4/21</Text>
        <Text style={{color: WHITE, textAlign: 'justify'}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed neque
          consequuntur perspiciatis dolor velit ducimus accusantium
        </Text>
      </View>
    </TouchableOpacity>
  );
}
