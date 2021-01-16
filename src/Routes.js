import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View, Image } from "react-native";
import { Center } from "./Center";
import { Settings } from "./tabs/Settings";
import  HomeScreen  from '../src/Screens/Home/HomeScreen.js'
import FavScreen from '../src/Screens/Favourites/FavScreen.js'
import Add from '../src/Screens/Add/AddScreen.js'

const Tab = createBottomTabNavigator();

export const Routes = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Favourites" component={FavScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
