import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { View, Image, Text } from 'react-native'

export default function DrawerPadrao(props) {
    console.warn(props)
    return (
        <DrawerContentScrollView {...props}>
            <View>

                <Image source={require('../assets/umbrella.png')} style={{ width: 75, height: 75 }}></Image>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center' }}>Hello</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                </View>


                <Text>Olá! Usuário logado!</Text>

            </View>
            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    )
}