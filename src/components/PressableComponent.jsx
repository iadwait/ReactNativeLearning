import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const PressableComponent = () => {
    const onPress = () => {
        console.log("onPress")   
    }
    const onPressIn = () => {
        console.log("onPressIn")   
    }
    const onPressOut = () => {
        console.log("onPressOut")   
    }
    const onLongPress = () => {
        console.log("onLongPress")   
    }
    return (
        <View style={styles.container}>
            <Pressable 
            style={styles.button}
            onPress={onPress} // erither onPress or onLongPress any 1 can be called
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onLongPress={onLongPress} // Default value to get triggered is 500 milli seconds, we can change using below property
            delayLongPress={5000} // set to 5 seconds
            >
                <Text style={styles.buttonText}>PressableComponent</Text>
            </Pressable>
        </View>
    )
}

export default PressableComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#007bff'
    },
    buttonText: {
        fontSize: 18,
        color: "#fff"
    }
})