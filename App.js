import { StyleSheet, Text, View } from 'react-native';
import {styles} from './styles/Style.js';
import React from 'react';
import { Routes } from './src/routes/Routes'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

const LoginAuth = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <LoginAuth.Navigator initialRouteName='App'>
        <LoginAuth.Screen name='App' component={Routes} />
      </LoginAuth.Navigator>
    </NavigationContainer>
  );
}

