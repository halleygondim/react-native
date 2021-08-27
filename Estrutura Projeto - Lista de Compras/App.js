import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

export default function App() {

  // Hooks - useState
  const [produto, setProduto] = useState('')
  const [produtos, setProdutos] = useState([])

  //SPREAD JS
  function handleAdicionarProduto() {
    setProdutos(vetorVelho => [...vetorVelho, produto])
    setProduto('')
  }

  function handleRemoverProduto(prodRemover) {
    setProdutos(vetorVelho => vetorVelho.filter(prod => prod !== prodRemover))
  }


  return (
    <View>
      <Text>Lista de Compras</Text>
      <TextInput placeholder="Digite o produto!" value={produto} onChangeText={setProduto} ></TextInput>

      <Button title="X" onPress={handleAdicionarProduto} onClick></Button>

      <View>

        {

          produtos.map(pro => (
            <View key={pro} style={{ flexDirection: 'row' }}>
              <Text>{pro}</Text>
              <Button title="x" onPress={() => handleRemoverProduto(pro)}></Button>
            </View>
          )
          )
        }

      </View>

    </View>
  );
}