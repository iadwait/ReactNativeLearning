import { View, Text, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'

const exampleHello = () => {
    Alert.alert('Hello', 'Hello from Example')
}

const Example = () => {
    return (
        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center'}}>
            <TouchableOpacity style= {{ width: 70, height: 40 }}>
                <Button title='Back' onPress={exampleHello}/>
            </TouchableOpacity>

            <Text style= {{ flex: 1, textAlign: 'center', fontSize: 24, marginTop: -5 }}>Custom Header</Text>

            <TouchableOpacity style= {{ width: 70, height: 40 }}>
                <Button title='Right' onPress={exampleHello}/>
            </TouchableOpacity>
            
        </View>
    )
}

export default Example