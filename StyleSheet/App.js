import React from 'react'
import { Image, View, Text, StatusBar,StyleSheet } from 'react-native';


//Export na função
export default function App() {
  return (
    <View style={styles.area}>
      <Text style={[styles.alinhaTexto, styles.textoPrincipal]}>Oi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 10,
    marginLeft: 20
  },
  alinhaTexto: {
    textAlign: 'center'
  },
  textoPrincipal:{
    color: '#120ba8',
    fontSize:25
  }
});


