import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE, PRIMARY} from '../Constants/Colors';
import BtnComponent from '../Components/BtnComponent';
import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import Svg, {Path} from 'react-native-svg';
import {Height, QRCODE_URL, Width} from '../Constants/Constants';
import QRCode from 'react-native-qrcode-svg';

const BuisnessScreen = props => {
  const [selectedCategory, setSelectedCategory] = useState(false);
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
            height: 400,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(17,48,102,.5)',
            }}>
            <Header
              navigation={navigation}
              variant="user"
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            />
            <View
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  padding: 10,
                  borderRadius: 100,
                }}>
                <Image
                  source={require('../Assets/companyPic.png')}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text
                style={{
                  color: WHITE,
                  fontSize: 20,
                  marginVertical: 20,
                }}>
                Travelco
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
                  <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10.248}
                    height={18.401}
                    viewBox="0 0 8.248 15.401">
                    <Path
                      data-name="Icon awesome-facebook-f"
                      d="M7.708 8.663l.428-2.787H5.462V4.067a1.394 1.394 0 011.571-1.506h1.216V.188A14.826 14.826 0 006.091 0a3.4 3.4 0 00-3.642 3.751v2.125H0v2.787h2.449V15.4h3.013V8.663z"
                      fill="#066aff"
                    />
                  </Svg>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                  }}>
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ffffff',
                    padding: 10,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 50,
            paddingTop: 10,
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            marginTop: -50,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 30,
            }}>
            <BtnComponent
              placeholder="Connect"
              onPress={() => {}}
              width={true}
              widthValue="50%"
            />
          </View>
          <View style={{width: '100%', flexWrap: 'wrap', flexDirection: 'row'}}>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                paddingRight: 20,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={33.077}
                height={33.076}
                style={{marginRight: 10}}
                viewBox="0 0 33.077 33.076">
                <Path
                  data-name="Icon awesome-globe-africa"
                  d="M16.539.563A16.538 16.538 0 1033.077 17.1 16.538 16.538 0 0016.539.563zm10.67 14.371v.466a1.033 1.033 0 01-.572.924l-1.026.513a1.033 1.033 0 01-1.036-.065l-1.214-.81a1.035 1.035 0 00-.9-.121l-.177.059a1.033 1.033 0 00-.533 1.554l.883 1.324a1.033 1.033 0 00.86.46h.548a1.034 1.034 0 011.034 1.034v.756a1.035 1.035 0 01-.207.62l-1.25 1.666a1.038 1.038 0 00-.189.429l-.287 1.522a1.036 1.036 0 01-.317.571 10.644 10.644 0 00-1.667 1.945l-.869 1.3a1.851 1.851 0 01-3.2-.2 5.262 5.262 0 01-.556-2.353v-1.992a1.034 1.034 0 00-1.029-1.036h-1.726a3.643 3.643 0 01-3.643-3.643v-.938a3.644 3.644 0 011.457-2.914l1.839-1.38a3.645 3.645 0 012.186-.729h.059a3.636 3.636 0 011.629.385l.982.491a1.033 1.033 0 00.789.056l3.155-1.052a1.033 1.033 0 00-.327-2.014h-.673a1.033 1.033 0 01-.731-.3l-.46-.462a1.033 1.033 0 00-.731-.3H13.3a1.034 1.034 0 01-1.034-1.034v-.295a1.034 1.034 0 01.783-1l.964-.241a1.035 1.035 0 00.61-.429l.539-.808a1.033 1.033 0 01.86-.46h1.618A1.034 1.034 0 0018.673 5.4V3.95a13.356 13.356 0 0110.8 9.95h-1.23a1.034 1.034 0 00-1.034 1.033z"
                  transform="translate(0 -.563)"
                  fill="#151269"
                />
              </Svg>
              <View>
                <Text style={{color: PRIMARY, fontSize: 11}}>
                  Company Website
                </Text>
                <Text
                  style={{color: PRIMARY, fontSize: 13, fontWeight: 'bold'}}>
                  travelco.com
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={36.753}
                height={33.076}
                style={{marginRight: 10}}
                viewBox="0 0 36.753 33.076">
                <Path
                  data-name="Icon material-business-center"
                  d="M17.7 28.389v-1.838H4.856L4.838 33.9a3.663 3.663 0 003.675 3.675H34.24a3.663 3.663 0 003.675-3.675v-7.35H25.052v1.838zM36.077 11.85h-7.369V8.175L25.033 4.5h-7.35l-3.676 3.675v3.675H6.675A3.686 3.686 0 003 15.525v5.513a3.663 3.663 0 003.675 3.675H17.7v-3.675h7.351v3.675h11.026a3.686 3.686 0 003.675-3.675v-5.513a3.686 3.686 0 00-3.675-3.675zm-11.026 0H17.7V8.175h7.351z"
                  transform="translate(-3 -4.5)"
                  fill="#151269"
                />
              </Svg>
              <View>
                <Text style={{color: PRIMARY, fontSize: 11}}>
                  Business Industry
                </Text>
                <Text
                  style={{color: PRIMARY, fontSize: 13, fontWeight: 'bold'}}>
                  Travel
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                paddingRight: 20,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={32.812}
                height={32.811}
                style={{marginRight: 10}}
                viewBox="0 0 32.812 32.811">
                <Path
                  data-name="Icon ionic-ios-call"
                  d="M30.973 25.143a25.963 25.963 0 00-5.424-3.629c-1.625-.781-2.221-.764-3.372.064-.958.692-1.577 1.336-2.68 1.094s-3.275-1.883-5.383-3.983-3.75-4.281-3.983-5.383.41-1.722 1.094-2.68c.829-1.151.853-1.746.064-3.372a25.45 25.45 0 00-3.624-5.418C6.479.653 6.213.91 5.565 1.143a11.951 11.951 0 00-1.927 1.023 5.8 5.8 0 00-2.309 2.438c-.459.99-.99 2.833 1.714 7.645a42.656 42.656 0 007.5 10h0l.008.008.008.008h0a42.823 42.823 0 0010 7.5c4.812 2.7 6.655 2.173 7.645 1.714a5.7 5.7 0 002.438-2.309 11.951 11.951 0 001.023-1.922c.234-.652.5-.917-.692-2.105z"
                  fill="#151269"
                  stroke="#151269"
                  strokeWidth={2}
                />
              </Svg>
              <View>
                <Text style={{color: PRIMARY, fontSize: 11}}>Contact</Text>
                <Text
                  style={{color: PRIMARY, fontSize: 13, fontWeight: 'bold'}}>
                  0445 3434 3434
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={31.474}
                height={31.474}
                style={{marginRight: 10}}
                viewBox="0 0 31.474 31.474">
                <Path
                  data-name="Icon awesome-location-arrow"
                  d="M27.326.216L1.767 12.013a2.98 2.98 0 001.18 5.7H13.76v10.815a2.98 2.98 0 005.7 1.18l11.8-25.559A3.067 3.067 0 0027.326.216z"
                  fill="#151269"
                />
              </Svg>
              <View>
                <Text style={{color: PRIMARY, fontSize: 11}}>
                  Company Address
                </Text>
                <Text
                  style={{color: PRIMARY, fontSize: 13, fontWeight: 'bold'}}>
                  Lahore
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={{
              color: PRIMARY,
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 15,
            }}>
            Products
          </Text>
          <ScrollView
            style={{marginBottom: 40, marginTop: 20}}
            horizontal={true}>
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category1"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category2"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category3"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category4"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category5"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category6"
            />
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              title="Category7"
            />
          </ScrollView>
          <ScrollView style={{}} horizontal={true}>
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
          </ScrollView>
          <View
            style={{
              width: '100%',
              marginVertical: 50,
              alignItems: 'center',
            }}>
            <QRCode
              value={QRCODE_URL} // logo={{uri: base64Logo}}
              logoSize={50}
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

function CategoryFilter({selectedCategory, title, setSelectedCategory}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedCategory(title);
      }}
      style={{
        backgroundColor: selectedCategory === title ? PRIMARY : '#ffffff',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        marginRight: 10,
      }}>
      <Text
        style={{
          color: selectedCategory === title ? '#ffffff' : PRIMARY,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
