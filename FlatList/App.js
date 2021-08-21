import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'

export default function App() {

    const nomes = [{ id: 1, nome: 'Maria', telefone: '6222', email: 'maria@gmail' },
    { id: 2, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
    { id: 3, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
    { id: 4, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
     { id: 5, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
     { id: 6, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
     { id: 7, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
     { id: 8, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
     { id: 9, nome: 'Zé', telefone: '655', email: 'ze@gmail' },
    ];
    //uuid
    return (
        <View style={styles.container}>
           
            <FlatList
                data={nomes} keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Contato data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    marginTop:15
   
},
contato:{
    backgroundColor:'#ae54de',
    height:150,
    margin:10
}

}
)

function Contato({ data }) {
    return (
        <View style={styles.contato}>
            <Text>Nome: {data.nome}</Text>
            <Text>Telefone: {data.telefone}</Text>
            <Text>Email: {data.email}</Text>
        </View>
    )
}