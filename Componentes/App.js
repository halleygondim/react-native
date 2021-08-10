import React from  'react'
import { Image, View, Text, StatusBar } from 'react-native';

function Produto(props){
  const imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Umbrella_Corporation_logo.svg/480px-Umbrella_Corporation_logo.svg.png'
return(
 <View>
  <Image source={{uri : imagem}} style={{width:props.largura, height:props.altura}}></Image>
  <Text>{props.preco}</Text>
  <Text style={{marginTop:25}}>{props.descricao}</Text>
 </View>
);
}

//Export na função
export default function App(){
  return(
  <View>
    <StatusBar hidden={true}></StatusBar>
    <Produto largura={50} altura={50} preco={500} descricao="Adesivo Umbrella Corp1" ></Produto>
    <Produto largura={100} altura={100} preco={600} descricao="Adesivo Umbrella Corp2" ></Produto>
    <Produto largura={100} altura={100} preco={600} descricao="Adesivo Umbrella Corp2" ></Produto>
  </View>
  );
}


