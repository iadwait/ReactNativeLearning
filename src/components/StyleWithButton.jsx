import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const StyleWithButton = () => {
    return (
        <SafeAreaView>
            {/* Basic Button does not support Style property few like color and all is only available */}
            <Button title='Basic Button' color="red" />
            
            {/* Mostly used for icons and all click, ActiveOpacity default is 0.2 */}
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>TouchableOpacity</Text>
            </TouchableOpacity>

            {/*  OnPress is mandatory for Click, underlayColor is color when tapped to inform user */}
            <TouchableHighlight style={styles.button} onPress={() => {console.log("Tapped")}} underlayColor="#3A1078">
                <Text style={styles.buttonText}>TouchableHighlight</Text>
            </TouchableHighlight>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 20,
        backgroundColor: '#4E31AA',
        padding: 20,
        borderRadius: 25,
        elevation: 5, // Shadow Works only on Android
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default StyleWithButton