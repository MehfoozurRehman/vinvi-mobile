import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {SECONDARY, WHITE} from '../Constants/Colors';
import Header from '../Components/Header';
import Svg, {G, Path} from 'react-native-svg';
import {Height, Width} from '../Constants/Constants';

const TermsConditionScreen = props => {
  const navigation = props.navigation;
  return (
    <SafeAreaView
      style={{
        height: Height,
        width: Width,
      }}>
      <ImageBackground
        source={require('../Assets/screenbg.png')}
        style={{
          flex: 1,
        }}>
        <Header
          navigation={navigation}
          variant="dark2"
          headerName="Terms & Condition"
          onPress={() => {
            navigation.navigate('Home');
          }}
          headerIcon={
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={16.814}
              height={20.551}
              viewBox="0 0 16.814 20.551">
              <Path
                data-name="Icon material-content-paste"
                d="M14.946 1.868h-3.9a2.791 2.791 0 00-5.269 0h-3.9A1.874 1.874 0 000 3.737v14.946a1.874 1.874 0 001.868 1.868h13.078a1.874 1.874 0 001.868-1.868V3.737a1.874 1.874 0 00-1.868-1.869zm-6.539 0a.934.934 0 11-.934.934.937.937 0 01.934-.934zm6.539 16.815H1.868V3.737h1.869v2.8h9.341v-2.8h1.868z"
                fill="#fff"
              />
            </Svg>
          }
        />
        <ScrollView
          style={{
            flex: 1,
            paddingHorizontal: 20,
          }}>
          <View
            style={{
              padding: 20,
              backgroundColor: WHITE,
              borderRadius: 5,
              paddingBottom: 150,
            }}>
            <Text
              style={{
                color: SECONDARY,
                textAlign: 'justify',
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quis enim voluptatum non debitis quo eligendi sed
              voluptatibus pariatur nobis blanditiis repellat, nihil porro
              ducimus sequi aspernatur? Temporibus saepe provident laboriosam
              officia, omnis itaque sapiente voluptatum beatae quo autem libero
              quibusdam, repellendus amet aspernatur voluptates iusto illo et
              soluta tenetur natus sequi! Vitae cupiditate ipsa laboriosam minus
              nemo praesentium ducimus quis autem animi magni? Possimus ipsam
              error ullam impedit. Quas quaerat excepturi sed explicabo itaque
              at saepe id ipsam fugiat doloribus rerum eligendi dignissimos nam
              rem, sint aut enim voluptatem consequuntur est animi maiores.
              Excepturi quidem non illo? Pariatur aut, ipsam ratione autem, nisi
              laborum deserunt odio sit accusamus est fugit tempora unde.
              Dolorem alias, tempora facere, repellat assumenda sit distinctio
              nisi voluptas vitae soluta, voluptatibus consequatur numquam ad
              mollitia libero veritatis beatae magni quidem. Dolorum eius quasi
              officiis, commodi sit minima doloremque, iste eum provident
              corporis debitis saepe, deserunt iure modi ut sapiente quae
              eligendi recusandae quo! Modi, non similique aliquam dolorum, qui
              necessitatibus fugiat suscipit officiis placeat, fugit quaerat et
              aperiam eveniet! Deserunt quaerat consequuntur, totam maxime
              facere nostrum culpa quia quod eius quos? Itaque quos quidem id
              porro explicabo iure, repudiandae dicta dolore. A, impedit
              nesciunt aut, magnam aliquid veniam blanditiis repellendus
              quisquam distinctio possimus hic qui? Cum consectetur tempore
              officia dicta, id, alias minima blanditiis vel soluta maiores
              mollitia voluptatum error! Similique distinctio dolor aspernatur
              autem, veritatis aperiam eveniet nobis consequuntur atque! Enim,
              in atque voluptatibus tempora quasi quisquam, eum similique iusto
              nisi hic voluptatem sint nemo alias voluptas commodi accusamus
              assumenda sunt incidunt necessitatibus ducimus quam vero!
              Explicabo commodi molestiae animi illum alias accusantium, ipsam
              perferendis deserunt dolorum itaque facilis optio quod,
              voluptatibus quibusdam amet saepe molestias hic corporis.
              Repellendus aperiam blanditiis qui! Est, incidunt assumenda animi
              amet quo error impedit blanditiis quod quisquam possimus!
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TermsConditionScreen;
