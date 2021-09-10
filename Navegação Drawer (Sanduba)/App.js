import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {View } from 'react-native'

import Home from './src/pages/Home'
import Sobre from './src/pages/Sobre'
import Contato from './src/pages/Contato'
import DrawerPadrao from './src/components/DrawerPadrao';

/*

yarn start --reset-cache

yarn add @react-navigation/native
yarn add @react-navigation/drawer
expo install react-native-screens react-native-safe-area-context
expo install react-native-gesture-handler react-native-reanimated
*/

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={DrawerPadrao}>
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Sobre" component={Sobre}/>
        <Drawer.Screen name="Contato" options={{headerShown: false}} component={Contato}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

