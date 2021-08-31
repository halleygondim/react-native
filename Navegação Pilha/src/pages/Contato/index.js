import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Contato({ route }) {
    const navigation = useNavigation();
console.warn(route)
 return (
   <View>
    
     <Text>Contatos</Text>
     <Text>{route.params?.email}</Text>
     <Text>{route.params?.twitter}</Text>
     <Button
     title="Voltar para Inicio!"
     onPress={ () => navigation.goBack() }
     />
   </View>
  );
}