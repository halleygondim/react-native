import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Button, Text, View, TextInput, Keyboard } from 'react-native';
import api from './src/services/api'

//yarn add axios

export default function App() {

  const [cep, setCep] = useState(''); //busca
  const focusCep = useRef(null)
  const [resultCep, setResultCep] = useState(null) //exibir

  //Estudar: Callback, Promisses e async await

  function handleLimparCampo(){
    setCep('')
    focusCep.current.focus()
    setResultCep(null)
  }

  async function handleBuscaCep() {
    //URL: viacep.com.br/ws/01001000/json/

    if(cep === ''){
      alert('Por favor! Digite um CEP válido!')
      setCep('');
      return;
    }

    try {
      // "/"+cep+"/json"
      const responseApi = await api.get(`/${cep}/json`)
      //console.warn(responseApi)
      //pegar as informações
      setResultCep(responseApi.data)
      Keyboard.dismiss();

    } catch (error) {
      console.log('Erro ' + error)
    }
  }

  return (
    <View>
      <Text>Buscar CEP</Text>
      <TextInput value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        placeholder="Ex. 74000000"
        ref={focusCep} />

      <View style={{flexDirection:'row', justifyContent:'space-around'}}>
      <Button title="Buscar" onPress={handleBuscaCep} />
      <Button title="Limpar" onPress={handleLimparCampo} />
      </View>  

      {
        resultCep &&
        <View>
          <Text>CEP: {resultCep.cep}</Text>
          <Text>Logradouro: {resultCep.logradouro}</Text>
          <Text>Bairro: {resultCep.bairro}</Text>
          <Text>Cidade/UF: {resultCep.localidade} / {resultCep.uf}</Text>
          <Text>DDD: {resultCep.ddd}</Text>
        </View>
      }
    </View>
  );
}

