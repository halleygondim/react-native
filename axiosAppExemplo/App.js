import React, { useState } from 'react'
import { View, Text, TextInput, Keyboard, Button, FlatList } from 'react-native'
import api from './src/services/api'

//API https://github.com/halleygondim/api_node_backend
//yarn add axios

export default function App() {

  function Elogio({ data }) {
    return (
      <View style={{backgroundColor:'#999',margin:3,flexDirection:'row'}}>
        <Text>{data.name}</Text>
        <Button title="x" onPress={() => handleDeletar(data.id)}></Button>
      </View>

    )
  }



  const [usuario, setUsuario] = useState({})
  const [token, setToken] = useState('');
  const [acao, setAcao] = useState('');
  const [listagem, setListagem] = useState([]);


  async function handleAutenticar() {
    try {
      const response = await api.post('/login', usuario)
      setToken(response.data)
      setAcao('Autenticação concluída')
      Keyboard.dismiss()

    } catch (error) {
      console.log('ERRO' + error)
    }
  }


  async function handleDeletar(id){
    try {
      
      const response = await api.delete('/tags/'+id, { headers: { "Authorization": `Bearer ${token}` } })
      setAcao('Removeu tag com sucesso!')

    } catch (error) {
      console.log('ERRO' + error)
    }

  }


  function handleDeslogar(){
    api.defaults.headers.common = {
      'Authorization' : 'Bearer '+ null
    };
    setToken('')
    setListagem([])
    setAcao('Saiu da aplicação')
  }



  async function handleListaTags() {
    try {
      const response = await api.get('/tags', { headers: { "Authorization": `Bearer ${token}` } })
      setListagem(response.data)
      setAcao('Listou os dados')
    } catch (error) {
      console.log('ERRO' + error)
    }
  }



  return (
    <View>
      <Text>CONSUMIR API AXIOS</Text>

      <Text>E-mail</Text>
      <TextInput value={usuario.email}
        onChangeText={email => setUsuario({ ...usuario, email })}
        placeholder="Digite o E-mail"
      />

      <Text>Senha</Text>
      <TextInput value={usuario.password}
        onChangeText={password => setUsuario({ ...usuario, password })}
        placeholder="Digite a senha"
      />

      <Text>Dados do form: {usuario.email} - {usuario.password}</Text>


      <View style={{ flexDirection: 'row', justifyContent: 'space-around', margin: 20 }}>
        <Button title="Logar" onPress={handleAutenticar}></Button>
        <Button title="Sair" onPress={handleDeslogar}></Button>
        <Button title="Listar" onPress={handleListaTags}></Button>
      </View>

      <View style={{ margin: 20 }}>
        <Text>Token</Text>
        <Text>{token}</Text>
        <Text>Ação</Text>
        <Text>{acao}</Text>
      </View>


      <View>
        <Text>Listagem de dados</Text>
        <FlatList
          data={(listagem)} keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Elogio data={item} />}
        />
      </View>



    </View>
  )
}
