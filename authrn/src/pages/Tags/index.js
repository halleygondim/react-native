import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';

import { useAuth } from '../../contexts/auth';
import { listarTags, deletar } from '../../services/tagService';

import { Elogio } from './Elogio';



export default function Tags() {
  //OBTENDO OS DADOS DO USECONTEXT AUTH
  const { token, signOut } = useAuth();
  const [listagem, setListagem] = useState();


  function handleSignOut() {
    //MÉTODO PASSADO PELO USECONTEXT
    signOut();
  }


  async function handleListarTags() {
    try {
      //MÉTODO VEM DO TAGSERVICES
      setListagem(await listarTags());
      console.log('dentro dashboard' + listagem)

    } catch (error) {
      //FAÇA O TRATAMENTO DE ERROS, USANDO ALGUM COMPONENTE OU O PRÓPRIO ALERT
      alert(error)
    }

  }

  async function handleDeletar(idSelecao) {
    try {
      //MÉTODO VEM DO TAGSERVICES
      await deletar(idSelecao)
      //APAGANDO DA LISTA O ITEM
      setListagem(vetorVelho => vetorVelho.filter(elogio => elogio.id !== idSelecao))
      console.log('dentro dashboard' + listagem)
    } catch (error) {
      alert(error)
    }

  }


  return (
    <View >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50 }}>
        <Button title="Listar Tags" onPress={handleListarTags} />
        <Button title="Sair" onPress={handleSignOut} />
      </View>

      {listagem &&
        <View>
          <Text>Listagem de dados</Text>
          <FlatList
            data={listagem} keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Elogio titulo={item} onPress={() => handleDeletar(item.id)} />}
          />
        </View>
      }

    </View>
  );
};

