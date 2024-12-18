import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const POST_API = () => {
    const [formData, setFormData] = useState({id: '', name: '', email: ''});
    const inputRef = useRef(null);
    const handleInput = (field, value) => {
        setFormData({...formData, [field] : value})
    }
    const handleSubmit = async () => {
        if (formData.id == "" || formData.name == "" || formData.email == "" ) {
            Alert.alert('Empty Data', `Please enter value of all fields`)
            return;
        }
        try {
         const response = await axios.post('http://10.0.2.2:3000/users', formData);
         console.log(response.data)
         Alert.alert(
            'Success',
            'Data Submitted Successfully'
         )
         setFormData({id: '', name: '', email: ''})
         handleBlur()
        } catch (error) {
            Alert.alert('Error',error)
        }
    }
    const handleBlur = () => {
        if (inputRef.current) {
          inputRef.current.blur(); // Remove focus when this function is called
        }
      };
  return (
    <SafeAreaView>
      <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 10}}>POST_API</Text>
      <TextInput 
        placeholder='Enter ID'
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
      />
      <TextInput 
        placeholder='Enter Name'
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
      />
      <TextInput 
        placeholder='Enter Email'
        ref={inputRef}
        value={formData.email}
        onChangeText={(value) => handleInput('email', value)}
      />
      <Button title='Add Data' onPress={handleSubmit}/>
    </SafeAreaView>
  )
}

export default POST_API