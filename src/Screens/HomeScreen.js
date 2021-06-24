import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SECONDARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Heading from '../Components/Heading';
import Paragraph from '../Components/Paragraph';
import Svg, {Path} from 'react-native-svg';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: WHITE,
      }}>
      <ImageBackground
        source={require('../Assets/homebg.png')}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Assets/Vinvi.png')}
            style={{marginTop: 30, width: 140}}></Image>
          <View style={{width: '100%', paddingHorizontal: 20}}>
            <Heading placeholder="Heading" />
            <Paragraph
              placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Sapiente, incidunt iste! Veritatis, eum consectetur. Reiciendis
              harum enim tempore eum error quibusdam labore ipsum recusandae.
              Tenetur recusandae quisquam rerum facilis consectetur dolore sint
              perspiciatis numquam ipsa architecto, sit excepturi provident
              mollitia culpa ab! Esse omnis qui libero perspiciatis odit
              temporibus illum!"
            />
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                marginBottom: 20,
              }}>
              <TouchableOpacity
                style={{
                  padding: 20,
                  borderRadius: 50,
                  backgroundColor: WHITE,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.47}
                  height={20.926}
                  viewBox="0 0 21.47 20.926">
                  <Path
                    data-name="Icon awesome-arrow-right"
                    d="M9.128 1.402L10.192.338a1.145 1.145 0 011.624 0l9.315 9.31a1.145 1.145 0 010 1.624l-9.315 9.315a1.145 1.145 0 01-1.624 0l-1.064-1.062a1.151 1.151 0 01.019-1.644l5.774-5.5H1.15A1.147 1.147 0 010 11.23V9.697a1.147 1.147 0 011.15-1.15h13.772l-5.774-5.5a1.143 1.143 0 01-.02-1.645z"
                    fill="#313a78"
                  />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
