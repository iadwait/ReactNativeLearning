import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

export class SecondClass extends Component {
    // Using State in Class Component is different as that of functional
    // need to initialize state in constructor
    constructor() {
        super(); // Mandatory, Calls Parent Class Constructor
        this.state = { // In class component State, props are // This is useState in functional component
            myName: "Adwait"
        }
    }
    updateName = () => {
        this.setState( {myName: 'John'} )
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>SecondClass</Text>
                <Text>Name: {this.state.myName} Age: {this.props.data}</Text>
                <Button title='Change Name' onPress={this.updateName} />
            </View>
        )
    }
}

export default SecondClass