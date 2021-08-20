import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function App() {
    return (
        <View style={{ flex: 1 }}>
           <Text>oi</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
            
                <View style={{ height: 300, backgroundColor: 'yellow' }}></View>
                <View style={{ height: 300, backgroundColor: 'red' }}></View>
                <View style={{ height: 300, backgroundColor: 'blue' }}></View>
                <View style={{ height: 300, backgroundColor: 'green' }}></View>
                <View style={{ height: 300, backgroundColor: 'black' }}></View>
            </ScrollView>
        </View>
    );
}