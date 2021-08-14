import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalculator, faGasPump } from '@fortawesome/free-solid-svg-icons';

//Export na função
export default function App() {

  const [gas,setGas] = useState(0);
  const [etanol,setEtanol] = useState(0);

  function calcular(){

    const valor = etanol/gas;
    const porcentagem = valor*100.
    const textoBase = porcentagem.toFixed(0)+'% O combustível mais vantajoso é: ';
    if(valor >= 0.7){
      alert(textoBase+'a GASOLINA')
    }else{
      alert(textoBase+'o ETANOL')
    }
 
  }



  return (
    <View style={styles.container}>
       
      <View style={styles.header}>
      <FontAwesomeIcon icon={ faGasPump} color={ 'white'} size={50}/>
      <Image
          source={require('./assets/combustivel.jpg')}
          style={{ width: 280, height: 280, marginLeft:20, marginRight:10, borderRadius: 300 }}
        />
        <FontAwesomeIcon icon={ faGasPump} color={ 'white'} size={50}/>
      </View>
    
      <View style={styles.resultado}>
    
        <Text style={styles.titulo}>Gasolina ou Etanol?</Text>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="R$ litro (Gasolina)" style={styles.inputGas} keyboardType='numeric' onChangeText={ (numero) => setGas(numero)}></TextInput>
        <TextInput placeholderTextColor='#FFFFFF' placeholder="R$ litro (Etanol)" style={styles.inputEtanol} keyboardType='numeric'onChangeText={(numero) => setEtanol(numero)} ></TextInput>
        <View style={{ alignItems: 'center', marginTop:30 }}>
          <TouchableOpacity style={styles.botao} onPress={calcular} >
            <View style={styles.btnArea}>
             <FontAwesomeIcon icon={ faCalculator} color={ '#009159'} size={50}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height:32,  backgroundColor: '#015835'}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: '#fffff2'
  },
  header: {
    flex: 1,
    backgroundColor: '#015835',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  resultado: {
    flex: 2,
    backgroundColor: '#ffffff'
  },
  titulo: {
    marginTop: 22,
    marginBottom:20,
    fontSize: 30,
    color: '#004080',
    textAlign: 'center',
    fontWeight: 'bold'
    
  },
  inputGas: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#025a9e'


  },
  inputEtanol: {
    margin: 10,
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#009159'


  }, botao: {
    width: 100,
    height: 65,
    borderWidth: 2,
    borderColor: '#009159',
    borderRadius: 25


  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});


/*
Adição de bibliotecas
yarn add react-native-svg
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-native-fontawesome
Escolher icones
https://fontawesome.com/v5.15/icons?d=gallery&p=2
*/