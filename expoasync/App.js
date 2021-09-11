
import React, { useEffect, useState } from 'react';
import {Button, Text, View, Keyboard,TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';



// expo install @react-native-async-storage/async-storage
//Async
//Chave/Valor
export default function App() {

  const [nome,setNome] = useState('')
  const [nomeSalvo,setNomeSalvo] = useState('')
  const [token,setToken] = useState('')
  const responseData = { token: 'dsfasdasfasdf', admin: true}


  async function handleGravarNome(){
    await AsyncStorage.setItem('nome',nome)
    alert('Salvo com sucesso!')
    Keyboard.dismiss()
  }

  async function handleGravarToken(){
    await AsyncStorage.setItem('ACCESS_TOKEN',JSON.stringify(responseData), (err) => {
      if (err){
        console.log('Ocorreu algum erro')
        throw err;
      }
      alert('Salvo com sucesso!')
    }).catch((err) => {
      console.log('Ocorreu algum erro')
    });
    Keyboard.dismiss()
  }


  //Similar ao ComponentDidMount e ComponentDidUpdate
  //Carregar uma única vez antes de renderizar todos os componentes.
  useEffect( async () => {

    //Buscando o dado que salvos 
    await AsyncStorage.getItem('nome').then((value) => {
      setNomeSalvo(value)
    })

    try {
      const value =  await AsyncStorage.getItem('ACCESS_TOKEN');
      console.warn(value)
      if(value !== null){
        setToken(value)
      }
      
    } catch (error) {
      //erro...
    }



  }, [], )


  return (
    <View >
  
       <TextInput value={nome} onChangeText={setNome} />
       <Button title="Salvar Nome" onPress={handleGravarNome}></Button>
       <Button title="Salvar Token" onPress={handleGravarToken}></Button>

       <Text>{nomeSalvo}</Text>    
       <Text>{token}</Text> 
    </View>

 
  );
}

 