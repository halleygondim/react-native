import React, { useState } from 'react' 
import {Button, View} from 'react-native' 
import { SvgCssUri } from 'react-native-svg'
import api from './src/services/api'

export default function App() { 

//yarn add react-native-svg

const [foto,setFoto] = useState();


async function handleBuscar() {
  try {
    const response = await api.get('/26')

    setFoto(response.data.sprites.other.dream_world.front_default)

    console.warn(foto)

  } catch (error) {
    console.log('ERRO' + error)
  }
}

async function handleBuscarLista() {
  try {
    const response = await api.get('/')

    

    console.warn(response.data)

  } catch (error) {
    console.log('ERRO' + error)
  }
}




  return (
    <View>
      <SvgCssUri
    width="85%"
    height="85%"
    uri={foto}
  />
  
  <Button title="Buscar" onPress={handleBuscar}></Button>
  <Button title="Buscar Lista" onPress={handleBuscarLista}></Button>
    </View>
  )
}