import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Settings } from './tabs/Settings'
import { Home } from './tabs/Home'
import { Favourites } from './tabs/Favourites'
import { Search } from './tabs/Search'
import { Login } from './tabs/Login'

// icon imgs
import home from './../../img/home.png'
import star from './../../img/star.png'
import setting from './../../img/setting.png'

// import Ionicons from 'react-native-vector-icons/Ionicons';

const BTabs = createBottomTabNavigator();

export const Routes = ({ }) => {
  return (
    <BTabs.Navigator initialRouteName='Home'
      screenOptions={({ route }) => ({
        // selected icon
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // console.log(focused)

          if (route.name === 'Home') {
            return <Image source={home} style={{ width: 30, height: 30 }} />;
          } else if (route.name === 'Settings') {
            return <Image source={setting} style={{ width: 30, height: 30 }} />;
          } else if (route.name === 'Favourites') {
            return <Image source={star} style={{ width: 30, height: 30 }} />;
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <BTabs.Screen name='Home' component={Home} />
      <BTabs.Screen name='Search' component={Search} />
      <BTabs.Screen name='Favourites' component={Favourites} />
      <BTabs.Screen name='Settings' component={Settings} />
    </BTabs.Navigator>

  );
}