import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Botao from '../../components/Botao';

export default function Inicial() {

  const navigation = useNavigation();

  function handleContato(){
    navigation.navigate('Contato', { email:'teste@gmail', twitter: 'teste' } );
  }

  //  onPress={() => navigation.navigate('Details')}
 return (
   <View>
     <Text>INÍCIO DO APP</Text>
     <Text>OLÁ!</Text>
     <Button
     title="Ir para contatos"
     onPress={handleContato}
     />
     <Botao></Botao>
   </View>
  );
}