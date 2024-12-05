import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SecondClass from './SecondClass'
import { SafeAreaView } from 'react-native-safe-area-context'

export class ClassComponents extends Component {
    render() {
        const age = 26
        return (
            <SafeAreaView>
                <Text style={ {fontSize: 30} }>ClassComponents</Text>
                <SecondClass data={age}/>
            </SafeAreaView>
        )
    }
}

export default ClassComponents