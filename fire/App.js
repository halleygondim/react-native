import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import database from './src/config/firebaseConnection'
import { getFirestore, collection, getDocs, query, doc, deleteDoc, where, setDoc, updateDoc } from 'firebase/firestore/lite';
import uuid from 'react-native-uuid'

export default function App() {
  //Caminho das pedras
  //expo init fire
  //yarn add firebase ou npm install firebase
  //DOCUMENTAÇÃO
  //https://firebase.google.com/docs/web/setup?hl=pt-br 
  //yarn add react-native-uuid ou npm install react-native-uuid


  /*FIREBASE TRABALHA COM NOSQL, NO CASO O TIPO DE DOCUMENTO (SEMELHANTE AO JSON)*/
  /*PARA NOSSO EXEMPLO, IMAGINE O SEGUINTE DOCUMENTO EM UMA COLEÇÃO CHAMADA CONTATOS*/
  /*{ nome: halley,
      email: halley.was@gmail.com
      telefone: 11111
  }*/

  const [contato, setContato] = useState({})
  const [lista, setLista] = useState([])


  useEffect(async () => {
    //PODE-SE FILTRAR UM DOCUMENTO DENTRO DA COLEÇÃO.
    // const q = query(collection(database, "contatos"), where("nome", "==", 'Maria'))
    const consulta = query(collection(database, "contatos"))
    //GETDOCS É SEMELHANTE AO VERBO GET
    const consultaSnapshot = await getDocs(consulta);
    const list = [];
    consultaSnapshot.forEach((dado) => {
      list.push({ ...dado.data(), id: dado.id });
    });
    setLista(list)

  }, []);


  async function deleteContato(id) {
    //DELETEDOC É SEMELHANTE AO VERBO DELETE
    await deleteDoc(doc(database, "contatos", id));
    setLista(listaVelha => listaVelha.filter(contato => contato.id !== id))
  }

  async function addContato() {
    const chave = uuid.v4();
    console.log(chave)
    //SETDOC É SEMELHANTE AO VERBO POST
    await setDoc(doc(database, "contatos", "5"),
      contato
    );
    setLista(listaVelha => [...listaVelha, contato])
    setContato({})
  }

  async function editContato() {
    //UPDATEDOC É SEMELHANTE AO VERBO PUT
    await updateDoc(doc(database, "contatos", "5"), {
      nome: "tt33",
    });
  }

  return (
    <View style={{ flex: 1 }}>
      <Text>FIREBASE</Text>
      <View >
        <Text>Nome</Text>
        <TextInput placeholder="Digite o nome!" value={contato.nome} onChangeText={nome => setContato({ ...contato, nome })} />
        <Text>Email</Text>
        <TextInput placeholder="Digite o email!" value={contato.email} onChangeText={email => setContato({ ...contato, email })} />
        <Text>Telefone</Text>
        <TextInput placeholder="Digite o telefone!" value={contato.telefone} onChangeText={telefone => setContato({ ...contato, telefone })} />
        <Button title="Inserir" onPress={addContato} />

        <Button title="Alterar" onPress={editContato} />
      </View>
      {
        lista.map((dado) => {
          return (
            <View key={dado.id} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: 10 }}>
              <Text>{dado.nome}</Text>
              <Button title="x" onPress={() => deleteContato(dado.id)} />
            </View>
          )
        })
      }
    </View>
  )

}