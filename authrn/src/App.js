import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthProvider} from './contexts/auth';

import Routes from './routes';


//Dentro de index.js tenho que apontar para cá.

export default function App(){
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

