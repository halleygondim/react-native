import { StatusBar } from 'expo-status-bar';
import React from 'react'
import {View, Text} from 'react-native'

export default function App() {

const num = 10;

  return (
      
    <View>
        <StatusBar hidden={true}/>
        { num === 11 ? <Text >O número é igual a 11</Text>
                     : <Text>O número é diferente de 11</Text>
        }
    </View>
  );
}