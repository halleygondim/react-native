import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';
import { logar } from '../services/authService';


const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  //carregar infomação
  const [loading, setLoading] = useState(true);


  //ESSA FUNÇÃO SERÁ EXECUTADA TODA VEZ QUE SE CARREGAR O APLICATIVO
  useEffect(() => {
    async function carregarDados() {
      //PODE-SE PEGAR O ITEM GRAVADO
      const storagedToken = await AsyncStorage.getItem('@NomeAplicao:token');
      if (storagedToken) {
        setToken(storagedToken);
        // SE GRAVAR OBJETO NO ASYNCSTORAGE USE setUser(JSON.parse(@DADOGRAVADO));
        //FAZ INSERÇÃO DO TOKEN EM CADA REQUISIÇÃO
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }
    //TEM QUE INVOCAR O MÉTODO
    carregarDados();
  });

  async function signIn(usuario) {
    console.log("dentro contexto" + usuario)
    const response = await logar(usuario);
    setToken(response);

    api.defaults.headers.Authorization = `Baerer ${token}`;
    await AsyncStorage.setItem('@NomeAplicao:token', response);
  }

  async function signOut() {
    await AsyncStorage.clear();
    setToken(null);
  }

  return (
    <AuthContext.Provider
      value={{ logado: !!token, token, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

//CRIAMOS UM HOOKS PARA INVOCAR NOSSO AUTHCONTEXT
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado com o AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
