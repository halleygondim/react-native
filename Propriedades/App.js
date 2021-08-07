import React from 'react'
import { View,Text, Image} from 'react-native'

function App(){

  const modelo = 'Modelo 123'
  const imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Umbrella_Corporation_logo.svg/480px-Umbrella_Corporation_logo.svg.png'

  return(
    
    <View>
      {/*utilizar JSX*/}
      <Text style={{marginTop:25}}>Adesivo</Text>
      <Image source={{uri:imagem}} style={{width:150, height:150}}></Image>
      <Text style={{fontSize:25}}>{modelo}</Text>
    </View>
     );
}

export default App;