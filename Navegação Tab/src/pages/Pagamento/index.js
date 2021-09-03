import { useNavigation } from '@react-navigation/native';
import  React, { useState } from 'react'
import {View, Text, Button} from 'react-native' 

export default function Contato({route}){
const navigation = useNavigation()

//console.warn(route)

 return(
 <View>
     <Text>TELA DE PAGAMENTO</Text>
     

 <Button title="Voltar para o início" onPress={ () => navigation.goBack() }></Button>

 </View>
 );
} 