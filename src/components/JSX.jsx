import React from 'react'
import { View, Text } from 'react-native'

const JSX = () => {
    let name = 'Adwait'
    const getAge = () => {
        return 26
    };
    return (
        <View>
            <Text style={{ fontSize: 30 }}>JSX</Text>
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Text style={{ fontSize: 30 }}>{getAge()}</Text>
        </View>
    )
}

export default JSX;