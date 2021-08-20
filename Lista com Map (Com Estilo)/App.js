import React from 'react'
import { View, Text, StatusBar, Image, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
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
            <StatusBar hidden={true}></StatusBar>
            <ScrollView>
            <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginBottom:15 }}>Twitters Populares</Text>
           
                {contatos.map(contato => {
                    return (

                        //`Olá meu id é ${id} e também posso...`
                        <View key={`${contato.id}`} style={{  flexDirection: 'row', backgroundColor: '#daecfe', padding: 10, margin: 10 }}>

                            <Image source={{ uri: contato.avatar }} style={{ height: 50, width: 50 }} ></Image>

                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 30, marginLeft: 20 }}>{contato.apelido}</Text>
                                <Text style={{ fontSize: 15, marginLeft: 20 }}>{contato.twitter}</Text>
                            </View>

                            <TouchableOpacity style={{justifyContent:'center',  marginLeft: 'auto'}} onPress={(() => console.warn('Você está seguindo! '+contato.apelido))}>
                                <View>
                                    <FontAwesomeIcon icon={faUserPlus} color={'#009159'} size={35} />
                                </View>
                            </TouchableOpacity>
                            
                            {/*envolver mais de um botão
                            <View style={{ justifyContent: 'center', 
                            flexDirection: 'row', 
                            alignSelf: 'center', 
                            marginLeft: 'auto' }}>*/}


                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}