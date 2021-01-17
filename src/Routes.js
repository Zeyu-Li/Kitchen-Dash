import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View, Image } from "react-native";
import { Center } from "./Center";
import { Settings } from "./tabs/Settings";
import HomeScreen from "../src/Screens/Home/HomeScreen.js";
import FavScreen from "../src/Screens/Favourites/FavScreen.js";
import Add from "../src/Screens/Add/AddScreen.js";

const Tab = createBottomTabNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              return (
                <Image
                  source={require("@expo/../../img/home.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else if (route.name === "Settings") {
              return (
                <Image
                  source={require("@expo/../../img/setting.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else if (route.name === "Favourites") {
              return (
                <Image
                  source={require("@expo/../../img/star.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else if (route.name === "Add") {
              return (
                <Image
                  source={require("@expo/../../img/add.png")}
                  style={{ width: 30, height: 30 }}
                />
              );
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
            // return <Image source={home} style={{ width: 30, height: 30 }} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Favourites" component={FavScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
