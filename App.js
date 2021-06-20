import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam
        animi tempore maxime iusto reiciendis blanditiis, deleniti commodi quam?
        Enim?
      </Text>
      <Button
        onPress={() => {
          navigation.navigate("Services");
        }}
        title="Services"
      ></Button>
      <StatusBar style="auto" />
    </View>
  );
}

function ServicesScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => <Text>My home</Text>,
            headerRight: () => (
              <Button onPress={() => alert("This is a button!")} title="Info" />
            ),
          }}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{
            title: "My Services",
            headerStyle: {
              backgroundColor: "#f4511e",
              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitle: () => <Text>My Services</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
