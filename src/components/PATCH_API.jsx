import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const PATCH_API = () => {
    const [formData, setFormData] = useState({id: '', name: '', email: ''});
    const handleInput = (field, value) => {
        setFormData({...formData, [field]: value})
    }
    const handleUpdate = async () => {
        console.log(formData.id)
        console.log(formData.name)
        console.log(formData.email)
        console.log(`Endoint = ${`http://10.0.2.2:3000/users/${formData.id}`}`)
        try {
            const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, {
                // name: formData.name
                ...formData.name && {name: formData.name},
                ...formData.email && {email: formData.email}
            });
            console.log(response.data)
            Alert.alert('Success','Data Updated Successfully');
            setFormData({id: '', name: '', email: ''});
        } catch (error) {
            console.log(`Error = ${error}`)
            Alert.alert('Error', error);
        }
    }
  return (
    <View>
      <Text style={{fontSize: 30, marginBottom: 10}}>PATCH_API</Text>
      <TextInput 
        placeholder='Enter ID'
        value={formData.id}
        onChangeText={(value) => {handleInput('id', value)}}
      />
      <TextInput 
        placeholder='Enter Name'
        value={formData.name}
        onChangeText={(value) => {handleInput('name', value)}}
      />
      <TextInput 
        placeholder='Enter Email'
        value={formData.email}
        onChangeText={(value) => {handleInput('email', value)}}
      />
      <Button title='Update Data' onPress={handleUpdate} />
    </View>
  )
}

export default PATCH_API