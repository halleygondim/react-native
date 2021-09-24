import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

//RESPONSÁVEL EM VERIFICAR PARA QUAL ROTA O USUÁRIO VAI, CASO ESTEJA LOGADO OU NÃO

export default function Routes(){
  //SIGNED = booleano ver se usuário está Logado
  const {logado, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#555" />
      </View>
    );
  }

  return logado ? <AppRoutes /> : <AuthRoutes />;
};

 