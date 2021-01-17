import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { styles } from './styles/Style.js';
import { Routes } from './src/Routes'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

import Login from './src/screens/Login/Login'

const LoginAuth = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <LoginAuth.Navigator initialRouteName='Login'>
      <LoginAuth.Screen name = "Login" component={Login} />
      <LoginAuth.Screen name='App' component={Routes} />
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
