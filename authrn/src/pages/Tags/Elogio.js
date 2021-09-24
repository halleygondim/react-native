import React from 'react';
import { View, Text, Button } from 'react-native'
import styles from './styles';


//PODE-SE USAR O ...rest
//PODE-SE USAR props ao inves de desconstruir, ficaria props.titulo
//PODE-SE DESCONSTRUIR e pegar as props desejadas
export function Elogio(props) {
  
  return (
    //estamos importando o style de outro arquivo
    <View style={styles.container}>
      {/*Passamos tanto a propriedade titulo com o método onpress*/}
      <Text>{props.titulo.name}</Text>
      <Button title="x" onPress={props.onPress}  ></Button>
    </View>
  )
}

/*
DESCONSTRUINDO
export function Elogio({ titulo, onPress }) {
  return (
    //estamos importando o style de outro arquivo
    <View style={styles.container}>
      <Text>{titulo.name}</Text>
      <Button title="x" onPress={onPress}  ></Button>
    </View>
  )
}
*/

/*
USANDO O ...REST
export function Elogio({ titulo, ...rest }) {
  return (
    //estamos importando o style de outro arquivo
    <View style={styles.container}>
      <Text>{titulo.name}</Text>
      <Button title="x" {...rest}  ></Button>
    </View>
  )
}
*/