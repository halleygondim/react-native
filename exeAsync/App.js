import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Keyboard,
  Button
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage'


/*
  Para instalar: npm install @react-native-async-storage/async-storage​
                 npm i       @react-native-async-storage/async-storage
  expo install @react-native-async-storage/async-storage
*/

export default function App() {

  const [nome, setNome] = useState('');
  const [nomeSalvo, setNomeSalvo] = useState('');
  const responseData = { token: 'eyJhbGciOiJIUzI1Ni', teste: 123 }



  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(async () => {

    await AsyncStorage.getItem('nome').then((value) => {
      setNomeSalvo(value)
    })

    try {
      const value = await AsyncStorage.getItem('ACCESS_TOKEN');
       if (value !== null) {
        // We have data!!
        console.warn(value)
        console.log(JSON.parse(value));
        }
    } catch (error) {
      // Error retrieving data
    }
   
    // GERALMENTE ESPERA UM RETORNO.
    return () => {
      console.log("")
    }

  },
    [],
  );



  async function handleGravarNome() {
    await AsyncStorage.setItem('nome', nome);
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }


  async function handleRemoverToken() {
    try {
      await AsyncStorage.removeItem('ACCESS_TOKEN');
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGravarToken() {
    AsyncStorage.setItem('ACCESS_TOKEN', JSON.stringify(responseData), (err) => {
      if (err) {
        console.log("Ocorreu algum erro!");
        throw err;
      }
      console.log("Sucesso!");
    }).catch((err) => {
      console.log("Erro: " + err);
    });

    Keyboard.dismiss();
  }



  return (
    <View  >

      <View  >
        <TextInput
          value={nome}
          onChangeText={setNome}
        />

        <Button title="Salvar" onPress={handleGravarNome}></Button>
        <Button title="Salvar Token" onPress={handleGravarToken}></Button>
        <Button title="Remover Token" onPress={handleRemoverToken}></Button>

      </View>

      <Text>{nomeSalvo}</Text>

    </View>
  );



}

