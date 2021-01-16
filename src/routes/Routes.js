import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Settings } from './tabs/Settings'
import { Home } from './tabs/Home'
import { Favourites } from './tabs/Favourites'
import { Search } from './tabs/Search'

const BTabs = createBottomTabNavigator();

export const Routes = ({ }) => {
  return (
    <BTabs.Navigator initialRouteName='Home'>
      <BTabs.Screen name='Home' component={Home} />
      <BTabs.Screen name='Search' component={Search} />
      <BTabs.Screen name='Favourites' component={Favourites} />
      <BTabs.Screen name='Settings' component={Settings} />
    </BTabs.Navigator>

  );
}