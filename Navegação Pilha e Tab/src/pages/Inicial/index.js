import { useNavigation } from '@react-navigation/native';
import  React from 'react'
import {View, Text, Button} from 'react-native' 

export default function Inicial(){

    const navigation = useNavigation();


    function handleContato(){
        navigation.navigate('Contato',{ email:'teste@gmail', twitter: '@teste'})
    }

    //onPress{() => navigation.navigate('Contato')}
 return(
 <View>
     <Text>INÍCIO APP</Text>
     <Text>Olá</Text>
     <Button title="Ir para Contatos" onPress={handleContato}/>
 
 </View>
 );
} 