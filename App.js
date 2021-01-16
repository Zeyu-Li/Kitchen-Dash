import { StyleSheet, View, Text, Button } from 'react-native';
import { styles } from './styles/Style.js';
import React from 'react';
import { Routes } from './src/routes/Routes'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from "@react-navigation/native"
import react from 'react';
const LoginAuth = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <LoginAuth.Navigator initialRouteName='Login' screenOptions={{}} headerMode='none'>
        <LoginAuth.Screen name="Login" component={testLogin} />
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
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
