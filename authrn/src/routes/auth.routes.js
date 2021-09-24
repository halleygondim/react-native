import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SignIn} from '../pages/SignIn';

const AuthStack = createStackNavigator();


//ROTAS PARA INDICAR PARA QUAL CAMINHO O USUÁRIO VAI CASO ESTEJA LOGADO OU NÃO

export default function AuthRoutes(){
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen options={{headerShown:false}} name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
)};
