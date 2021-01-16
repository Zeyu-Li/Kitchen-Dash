import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { styles } from './styles/Style.js';
import { Routes } from './src/routes/Routes'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

import {Login} from './src/routes/tabs/Login.js'

const LoginAuth = createStackNavigator();

import Login from './src/routes/components/Login'

export default function App() {
  return (
    <NavigationContainer>
      <LoginAuth.Navigator initialRouteName='Login'>
      <LoginAuth.Screen name = "Login" component={Login} />

      </LoginAuth.Navigator>
    </NavigationContainer>
  );
}


function testLogin({ navigation }) {
  return (
    <View>
      <Text>Hello, please log in</Text>
      <Button title='Log In' onPress={() => {
        navigation.navigate('App');
      }} />
    </View>
  )
}
