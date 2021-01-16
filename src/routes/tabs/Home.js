import React from 'react'
import { Text, View, Image } from 'react-native'

export function Home() {
  return (
    <View>
    <Image source={require("@expo/../../img/home.png")} />
      <Text>Home Page</Text>
    </View>
  );
}