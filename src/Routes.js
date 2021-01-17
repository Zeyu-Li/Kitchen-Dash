import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "./tabs/Settings";
import  HomeScreen  from './screens/Home/HomeScreen.js'
import FavScreen from './screens/Favourites/FavScreen.js'
import Add from './screens/Add/AddScreen.js'
// import { Login } from "./components/Login";

const BTabs = createBottomTabNavigator();

export const Routes = ({}) => {
  return (
    <BTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // selected icon
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // console.log(focused)

          // if (route.name === "Home") {
          //   return <Image source={home} style={{ width: 30, height: 30 }} />;
          // } else if (route.name === "Settings") {
          //   return <Image source={setting} style={{ width: 30, height: 30 }} />;
          // } else if (route.name === "Favourites") {
          //   return <Image source={star} style={{ width: 30, height: 30 }} />;
          // }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <BTabs.Screen name="Home" component={HomeScreen} />
      <BTabs.Screen name="Search" component={Add} />
      <BTabs.Screen name="Favourites" component={FavScreen} />
      <BTabs.Screen name="Settings" component={Settings} />
    </BTabs.Navigator>
  );
};
