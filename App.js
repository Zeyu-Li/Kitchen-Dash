import React from 'react';
import { Routes } from './src/routes/Routes'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"

const LoginAuth = createStackNavigator();

import Login from './src/routes/components/Login'

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

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
