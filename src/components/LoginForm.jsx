import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const handleLogin = () => {
        console.log('Login Details:')
        console.log('Email: ', email);
        console.log('Password: ', password)
        // Clear Data
        setEmail('');
        setPassword('');
    }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.heading}>Login</Text>
      <TextInput 
        style={style.input}
        placeholder='Email'
        value={email}
        onChangeText={(tflEmail) =>  setEmail(tflEmail)} //OR onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#999'
      />
      <TextInput 
        style={style.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='#999'
        secureTextEntry
      />
      <TouchableOpacity style={style.button} onPress={handleLogin}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// Styles
const style = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        paddingTop: 40,
        //paddingHorizontal: 20,
        marginHorizontal: 20
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#333",
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 20
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default LoginForm