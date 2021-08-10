import React from 'react'
import {View} from 'react-native'
 
//Export na função
export default function App() {
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
      <View style={{height:70, width:70, backgroundColor:'#ffff00'}}></View>
      <View style={{height:70, width:70,backgroundColor:'#ff8040'}}></View>
      <View style={{height:70, width:70,backgroundColor:'#008000'}}></View>
    </View>
  );
}

 
