import React, { useContext } from 'react'
import { Button, View } from 'react-native'
import { AuthContext } from '../contexts/auth'

export default function Botao() {

    const { usuarioLogado } = useContext(AuthContext)
    
    return (
        <View>
            <Button title={usuarioLogado.email}></Button>
        </View>
    )
}