import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Picker } from '@react-native-picker/picker';

//yarn add @react-native-picker/picker

export default function App() {

  const [filme, setfilme] = useState();
  const [filmes, setfilmes] = useState([{ nome: 'Velozes & Furiosos 9', duracao: '2h 23min' },
  { nome: 'O Esquadrão Suicida', duracao: '2h 12min' },
  { nome: 'Viúva Negra', duracao: '2h 14min' },
  { nome: 'Homem-Aranha 3', duracao: '2h 19min' },
  { nome: 'Um Lugar Silencioso - Parte II', duracao: '1h 37min' },{ nome: 'Velozes & Furiosos 9', duracao: '2h 23min' },
  { nome: 'O Esquadrão Suicida', duracao: '2h 12min' },
  { nome: 'Viúva Negra', duracao: '2h 14min' },
  { nome: 'Homem-Aranha 3', duracao: '2h 19min' },
  { nome: 'Um Lugar Silencioso - Parte II', duracao: '1h 37min' },
  { nome: 'Velozes & Furiosos 9', duracao: '2h 23min' },
  { nome: 'O Esquadrão Suicida', duracao: '2h 12min' },
  { nome: 'Viúva Negra', duracao: '2h 14min' },
  { nome: 'Homem-Aranha 3', duracao: '2h 19min' },
  { nome: 'Um Lugar Silencioso - Parte II', duracao: '1h 37min' }]);

  return (
    <View >
      <Text>PICKER</Text>
      <Text>Selecione o Filme</Text>

      <Picker
        selectedValue={filme}
        onValueChange={(itemValue) => {
          setfilme(itemValue)
        }}
      >
        {
          filmes.map((_filme, indice) => {
            return (
              <Picker.Item key={indice} value={indice} label={_filme.nome} />
            )
          })
        }
      </Picker>

      {filme >= 0 &&
        <View>
          <Text>Filme: {filmes[filme].nome}</Text>
          <Text>Filme: {filmes[filme].duracao}</Text>
        </View>
      }


    </View>
  );
}