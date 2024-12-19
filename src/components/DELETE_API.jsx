import { Alert, Button, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'

const DELETE_API = () => {
    const [id, setID] = useState();
    const performDelete = async () => {
        try {
            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`);
            console.log(response.data)
            Alert.alert('Success', 'Data Deleted Success');
            setID('');
        } catch (error) {
            Alert.alert('Failed', 'Failed to Delete data please check id.');
        }
    }
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30, textAlign: 'center' }}>DELETE_API</Text>
            <TextInput
                placeholder='Enter ID'
                value={id}
                onChangeText={(value) => setID(value)}
            />
            <Button
                title='Delete'
                onPress={performDelete}
            />
        </SafeAreaView>
    )
}

export default DELETE_API