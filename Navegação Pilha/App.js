import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contato from './src/pages/Contato';
import Inicial from './src/pages/Inicial';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteNam="Inicio" >
        <Stack.Screen
          name="Inicio"
          component={Inicial}
          options={({ navigation }) => {
            return {
              title: 'Inicio',
              headerStyle: {
                backgroundColor: '#9999'
              },
              headerTintColor: '#FFF',
              headerShown: true,
              headerRight: () => (
                <Button title="Add" onPress={() => navigation.navigate('Contato')}  ></Button>
              )
            }
          }
          }
        />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}