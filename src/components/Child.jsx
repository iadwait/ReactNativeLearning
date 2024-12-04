import { View, Text } from 'react-native'
import React from 'react'

// props here can have any name to accept variable data from parent view
const Child = (props) => {
    console.log(props)
    console.log(props.data)
    let counter = props.data
    let item = props.item
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Child</Text>
            <Text style={{ fontSize: 30 }}>Counter: {counter}</Text>
            <Text style={{ fontSize: 30 }}>Item: {item}</Text>
        </View>
    )
}

export default Child