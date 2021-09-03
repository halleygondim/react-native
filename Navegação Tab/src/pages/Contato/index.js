import { useNavigation } from '@react-navigation/native';
import  React, { useState } from 'react'
import {View, Text, Button} from 'react-native' 

export default function Contato({route}){
const navigation = useNavigation()

//console.warn(route)

 return(
 <View>
     <Text>TELA DE CONTATO</Text>
     <Text>{route.params?.email}</Text>
     <Text>{route.params?.twitter}</Text>

 <Button title="Voltar para o início" onPress={ () => navigation.goBack() }></Button>

 </View>
 );
} 