import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthProvider from './src/contexts/auth';

import Contato from './src/pages/Contato';
import Inicial from './src/pages/Inicial';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

//yarn add @react-navigation/native
//yarn add react-native-screens react-native-safe-area-context
//yarn add @react-navigation/native-stack

export default function App() {
  return (

    <NavigationContainer>
<AuthProvider>
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
      </AuthProvider>
    </NavigationContainer>
  );
 
}