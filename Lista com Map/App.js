import React from 'react'
import {View, Text} from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
export default function App() {

    const contatos = [
        { id: 1, apelido: 'Calvin Candie', twitter: '@calvin', avatar: 'https://image.flaticon.com/icons/png/512/924/924874.png' },
        { id: 2, apelido: 'Dr. King Schutlz', twitter: '@schutlz', avatar: 'https://image.flaticon.com/icons/png/512/2423/2423776.png' },
        { id: 3, apelido: 'Broomhilda', twitter: '@hilda', avatar: 'https://image.flaticon.com/icons/png/512/826/826610.png' },
        { id: 4, apelido: 'Django', twitter: '@django', avatar: 'https://image.flaticon.com/icons/png/512/3011/3011270.png' },
        { id: 5, apelido: 'Stephen', twitter: '@stephen', avatar: 'https://image.flaticon.com/icons/png/512/145/145867.png' },
        { id: 6, apelido: 'Paizão', twitter: '@paizao', avatar: 'https://image.flaticon.com/icons/png/512/3667/3667250.png' },
        { id: 7, apelido: 'Brittle', twitter: '@brittle', avatar: 'https://image.flaticon.com/icons/png/512/5418/5418586.png' }
    ]


  return (
    <View>
        <Text>Twitters Populares</Text>
        {
             contatos.map( item => {
                 return(
                     <View>
                         <Text>{item.apelido} - {item.twitter}</Text>
                     </View>
                 )
             })   
        }

    </View>
  );
}