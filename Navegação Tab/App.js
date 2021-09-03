import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contato from './src/pages/Contato';
import Inicial from './src/pages/Inicial';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
//https://reactnavigation.org/docs/getting-started
/*
>  yarn add @react-navigation/native
****SE PROJETO EXPO:
> expo install react-native-screens react-native-safe-area-context
****SE PROJETO CLI
> yarn add react-native-screens react-native-safe-area-context
****TIPO DE NAVEGAÇÃO PILHA
https://reactnavigation.org/docs/hello-react-navigation
>yarn add @react-navigation/native-stack
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteNam="Inicio" >
        {/* exemplo simples: options={{ title: 'Nome Tela' }}*/}
        <Stack.Screen
          name="Inicio"
          component={Inicial}
          options={ ({navigation}) => ({
              title: 'Inicio',
              headerStyle: {
                backgroundColor: '#9999'
              },
              headerTintColor: '#FFF',
              headerShown: true,
              headerRight: () => (
                <Button title="+" onPress={() => navigation.navigate('Contato')}  ></Button>
              )
            
          })}
        />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}