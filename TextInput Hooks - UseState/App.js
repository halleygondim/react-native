import React, {useState} from 'react'
import {TextInput, View, Text, StatusBar,Button, Alert} from 'react-native'
 


//Export na função
export default function App() {

  //let nome = 'oi';
  /*
    HOOKS - useState
    1- declarando uma variavel (nome)
    2- nome função que irá alterar a variável nome (usar prefixo set)
    3- definir valor inicial
  */
  const [nome,setNome] = useState('');
  const [sobreNome,setSobreNome] = useState('');
  

  return (
    <View>
      <StatusBar hidden={true}></StatusBar>
      <Text style={{fontSize:38}}>Coloque seu nome</Text>
      <TextInput onChangeText={texto => setNome(texto)} ></TextInput>
      <Button
        title="Exibir"
        onPress={() => Alert.alert('Seu nome é:'+nome)}
      />
      <Text>{nome}</Text>
      <Text>{nome}</Text>
    </View>
  );
}