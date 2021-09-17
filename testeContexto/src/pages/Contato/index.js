import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

/* 


*/



export default function Contato({ route }) {
    const navigation = useNavigation();
    const { usuarioLogado } = useContext(AuthContext)
  
    // console.warn(route)
    return (
        <View>

            <Text>Contatos oriundos via parametro telas</Text>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.twitter}</Text>
            <Button
                title="Voltar para Inicio!"
                onPress={() => navigation.goBack()}
            />

            <Text>Contatos oriundos via context</Text>
            <Text>{usuarioLogado?.nome}</Text>
            <Text>{usuarioLogado?.email}</Text>
        </View>
    );
}
