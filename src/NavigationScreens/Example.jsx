import { View, Text, TouchableOpacity, Button, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const exampleHello = () => {
    Alert.alert('Hello', 'Hello from Example')
}

const Example = ({ navigation, hideBackButton }) => {
    return (
        <SafeAreaView style={{ flexDirection: 'row', width: '100%', alignItems: 'center', backgroundColor: 'lightblue' }}>
            <View style = {{width: 60, marginLeft: 10 }}>
            {
                !hideBackButton && (
                    <TouchableOpacity style={{ width: 70, height: 40}}>
                        <Button title='Back' onPress={() => navigation.goBack()} />
                    </TouchableOpacity>
                )
            }
            </View>

            <Text style={{ flex: 1, textAlign: 'center',  fontSize: 24, marginTop: -5 }}>Custom Header</Text>

            <View style = {{width: 60, marginRight: 20 }}>
            <TouchableOpacity style={{ width: 70, height: 40}}>
                <Button title='Right' onPress={exampleHello} />
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Example