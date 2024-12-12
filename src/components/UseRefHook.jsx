import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'

// UseRef Hook is used to target and make change without rendering the component
const UseRefHook = () => {
    const myRef = useRef();
    const handleRef = () => {
        myRef.current.setNativeProps({
            text: "Adwait",
            //placeholder: "Enter Anything",
            style: { color: 'black', backgroundColor: 'lightgray' }
        })
        myRef.current.focus(); // To bring cursor and control
    }
    return (
        <View style={styles.container}>
            <TextInput
                ref={myRef}
                style={styles.input}
                placeholder='Enter your text'
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleRef}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f0f0f0",
        padding: 10
    },
    input: {
        width: '100%',
        height: '50',
        backgroundColor: "#fff",
        padding: 15,
        borderWidth: 1,
        borderColor: "#ccc",
        fontSize: 16,
        marginBottom: 20,
        borderRadius: 10
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default UseRefHook