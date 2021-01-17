import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View, Image } from "react-native";
import { Center } from "../Center";

import {styles} from './styles.js';

const Stack = createStackNavigator();

const user = {
  name: "John Adams",
  email: "JohnAdams@gmail.com",
  img: "",
}

function SettingsHome({ navigation }) {
  return (
    <Center>
      {/* <View  style={styles.button}>
      <Button 
        title="Account Details" sty
        onPress={() => {
          navigation.navigate("Account Details");
        }} 
      /></View> */}
      {/* profile pic */}
      { user.img.length === 0 ? <Image style={styles.img} source={require('@expo/../../img/none.png') } /> : <Image style={styles.img} source={require('@expo/../../img/none.png')} /> }
      {/* Name */}
      <Text style={styles.button, styles.bold}>{user.name}</Text>
      {/* Email: */}
      <Text style={styles.button}>{user.email}</Text>
      <View  style={styles.button}>
      <Button 
        title="Edit Account"
        onPress={() => {
          navigation.navigate("Account Details");
        }}
      /></View>
      <View style={styles.button}>
      <Button color="#FE7878" title="Logout" /></View>
    </Center>
  );
}

function AccountDetails() {
  return (
    <Center>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email} </Text>
    </Center>
  );
}
function EditAccount() {
  return (
    <Center>
      <Text>Change Email </Text>
      <Text>Change Password</Text>
      <Text>Clear Data </Text>
    </Center>
  );
}

export function Settings() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsHome} />
      <Stack.Screen name="Account Details" component={AccountDetails} />
      <Stack.Screen name="Edit Account" component={EditAccount} />
    </Stack.Navigator>
  );
}
