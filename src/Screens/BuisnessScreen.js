import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE, FIFTH, FORTH} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import ContactDetailsRowReverse from '../Components/ContactDetailsRowReverse';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import Svg, {Path} from 'react-native-svg';
import {Height, QRCODE_URL, Width} from '../Constants/Constants';
import QRCode from 'react-native-qrcode-svg';

const BuisnessScreen = props => {
  const navigation = props.navigation;
  return (
    <SafeAreaView
      style={{
        height: Height,
        width: Width,
      }}>
      <ScrollView
        style={{
          flex: 1,
        }}>
        <ImageBackground
          source={require('../Assets/buisnessbanner.png')}
          style={{
            width: '100%',
            height: 300,
          }}>
          <Header
            navigation={navigation}
            variant="user"
            onPress={() => {
              navigation.navigate('Dashboard');
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
          <Image
            source={require('../Assets/companyPic.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text
              style={{
                color: SECONDARY,
                fontSize: 20,
              }}>
              Travelco
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: FORTH,
              }}>
              A Travel Company
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 70,
            paddingHorizontal: 20,
            paddingBottom: 50,
          }}>
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
              <Text
                style={{
                  color: SECONDARY,
                  fontSize: 14,
                }}>
                Send Request
              </Text>
            </TouchableOpacity>
            <BtnComponent
              placeholder="Connect"
              onPress={() => {}}
              width={true}
              widthValue="28%"
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
              marginTop: 20,
            }}>
            <ProductCard
              productPic={require('../Assets/productPic.png')}
              productName="Product Name"
              productPrice="$343"
            />
            <ProductCard
              productPic={require('../Assets/productPic.png')}
              productName="Product Name"
              productPrice="$343"
            />
            <ProductCard
              productPic={require('../Assets/productPic.png')}
              productName="Product Name"
              productPrice="$343"
            />
            <ProductCard
              productPic={require('../Assets/productPic.png')}
              productName="Product Name"
              productPrice="$343"
            />
          </View>
          <View
            style={{
              width: '100%',
              backgroundColor: FIFTH,
              padding: 20,
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: SECONDARY,
                marginBottom: 8,
              }}>
              Personal Details
            </Text>
            <ContactDetailsRowReverse
              placeholder="Hourly Wage"
              value="$656"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12.64}
                  height={15.852}
                  viewBox="0 0 9.64 12.852">
                  <Path
                    data-name="Icon awesome-hourglass-end"
                    d="M9.037 1.607a.6.6 0 00.6-.6V.6a.6.6 0 00-.6-.6H.6a.6.6 0 00-.6.6V1a.6.6 0 00.6.6 4.981 4.981 0 003.033 4.82A4.981 4.981 0 00.6 11.246a.6.6 0 00-.6.6v.4a.6.6 0 00.6.6h8.437a.6.6 0 00.6-.6v-.4a.6.6 0 00-.6-.6A4.981 4.981 0 006 6.426a4.981 4.981 0 003.037-4.819zM4.82 5.221c-1.451 0-2.611-1.67-2.611-3.615H7.43c0 1.957-1.167 3.615-2.61 3.615z"
                    fill="#151269"
                  />
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Business Industry"
              value="Travel"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14.054}
                  height={18.748}
                  viewBox="0 0 13.054 11.748">
                  <Path
                    data-name="Icon material-business-center"
                    d="M5.222 8.485v-.653H.659l-.007 2.611a1.3 1.3 0 001.305 1.305H11.1a1.3 1.3 0 001.3-1.305V7.832H7.833v.653zm6.527-5.874H9.131V1.305L7.826 0H5.215L3.91 1.305v1.306h-2.6A1.309 1.309 0 000 3.916v1.958A1.3 1.3 0 001.305 7.18h3.917V5.874h2.611V7.18h3.916a1.309 1.309 0 001.305-1.305V3.916a1.309 1.309 0 00-1.305-1.305zm-3.916 0H5.222V1.305h2.611z"
                    fill="#151269"
                  />
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Date of Incorporation"
              value="5 May 2021"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15.414}
                  height={15.775}
                  viewBox="0 0 12.414 11.775">
                  <Path
                    data-name="Icon material-date-range"
                    d="M4.138 5.3H2.759v1.176h1.379zm2.759 0h-1.38v1.176H6.9zm2.759 0h-1.38v1.176h1.379zm1.379-4.121h-.69V0h-1.38v1.177H3.448V0H2.069v1.177h-.69A1.283 1.283 0 00.007 2.355L0 10.6a1.29 1.29 0 001.379 1.177h9.655a1.294 1.294 0 001.38-1.177V2.355a1.294 1.294 0 00-1.38-1.178zm0 9.42H1.379V4.121h9.655z"
                    fill="#151269"
                  />
                </Svg>
              }
            />
            <ContactDetailsRowReverse
              placeholder="Company Website"
              value="travelco.com"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15.969}
                  height={15.969}
                  viewBox="0 0 11.969 11.969">
                  <Path
                    data-name="Icon awesome-globe-africa"
                    d="M5.984 0a5.984 5.984 0 105.984 5.984A5.984 5.984 0 005.984 0zm3.861 5.2v.167a.374.374 0 01-.207.334l-.371.186a.374.374 0 01-.375-.023l-.439-.293a.375.375 0 00-.326-.044l-.064.021a.374.374 0 00-.193.562l.319.479a.374.374 0 00.311.166h.2a.374.374 0 01.374.374v.274A.374.374 0 019 7.628l-.452.6a.376.376 0 00-.068.155l-.1.551a.375.375 0 01-.115.207 3.851 3.851 0 00-.6.7l-.314.472a.67.67 0 01-1.156-.072 1.9 1.9 0 01-.2-.852v-.715a.374.374 0 00-.374-.374h-.635a1.318 1.318 0 01-1.318-1.318v-.339a1.319 1.319 0 01.527-1.054l.666-.5a1.319 1.319 0 01.791-.264h.021a1.316 1.316 0 01.59.139l.355.178a.374.374 0 00.285.02l1.142-.381a.374.374 0 00-.118-.729h-.244a.374.374 0 01-.264-.11l-.167-.165a.374.374 0 00-.264-.11H4.814a.374.374 0 01-.374-.374v-.106a.374.374 0 01.283-.363l.349-.087a.375.375 0 00.221-.155l.195-.292a.374.374 0 01.312-.167h.584a.374.374 0 00.374-.374v-.524a4.833 4.833 0 013.907 3.6h-.445a.374.374 0 00-.375.375z"
                    fill="#151269"
                  />
                </Svg>
              }
            />
          </View>
          <View
            style={{
              width: '100%',
              marginVertical: 70,
              alignItems: 'center',
            }}>
            <QRCode
              value={QRCODE_URL} // logo={{uri: base64Logo}}
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
};

export default BuisnessScreen;
