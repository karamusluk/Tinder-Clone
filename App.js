import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import Matches from "./src/screens/Matches";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  // const Tab = createBottomTabNavigator();
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView style={{ width: "100%", height: "100%", paddingTop: 20 }}>
      <NavigationContainer
        navigationOptions={{
          headerShown: false,
        }}
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let component;

              if (route.name === "Home") {
                component = <Fontisto name="tinder" size={24} color={color} />;
              } else if (route.name === "Matches") {
                component = (
                  <Ionicons name="chatbubbles" size={24} color={color} />
                );
              }

              // You can return any component that you like here!
              return component;
            },
            tabBarActiveTintColor: "#FE3C72",
            tabBarInactiveTintColor: "#424242",
            tabBarShowIcon: true,
            tabBarShowLabel: false,
            tabBarPosition: "bottom",
          })}
        >
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Matches"
            component={Matches}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
