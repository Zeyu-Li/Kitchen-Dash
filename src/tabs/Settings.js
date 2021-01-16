import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text } from "react-native";
import { Center } from "../Center";
const Stack = createStackNavigator();

function SettingsHome({ navigation }) {
  return (
    <Center>
      <Button
        title="Account Details"
        onPress={() => {
          navigation.navigate("Account Details");
        }}
      />
      <Button
        title="Edit Account"
        onPress={() => {
          navigation.navigate("Account Details");
        }}
      />
      <Button title="Logout" />
    </Center>
  );
}

function AccountDetails() {
  return (
    <Center>
      <Text>Name: John Smith</Text>
      <Text>Email: JohnSmith@gmail.com </Text>
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
    <Stack.Navigator initialRouteName="Settings Home">
      <Stack.Screen name="Settings Home" component={SettingsHome} />
      <Stack.Screen name="Account Details" component={AccountDetails} />
      <Stack.Screen name="Edit Account" component={EditAccount} />
    </Stack.Navigator>
  );
}
