import { View, Text, Alert, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
    // Life Cycle Methods
    useEffect(() => {
        getData('username');
    }, [])

    // Variables
    const [username, setUsername] = useState('');
    const [storedUsername, setStoredUsername] = useState('');

    // AsyncStorage Functions
    const storeData = async (key, value) => {
        if (!key || !value) {
            Alert.alert('Alert', 'Key or Value cannot be null');
            return;
        }
        try {
            await AsyncStorage.setItem(key, value);
            setUsername('');
            Alert.alert('Saved', `Data for key ${key} saved successfully.`)
        } catch (error) {
            Alert.alert('Failed', `Failed to save data for key ${key}`)
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (key === 'username' && value !== null) {
                setStoredUsername(value)
            } else {
                //Alert.alert(`Value for key ${key} not found.`)
            }
        } catch (error) {
            //Alert.alert('Failed', `Failed to get data from storage please check your key.`)
        }
    }

    const removeData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
            console.log("Removed")
            if (key === 'username') {
                setStoredUsername('');
            }
            Alert.alert('Success', `Data has been removed for key ${key}`)
        } catch (error) {
            console.log("Not Removed")
            console.log(error)
            Alert.alert('Alert', `Failed to remove data for key ${key}`)
        }
    }

    // Screen
    return (
        <View>
            <Text style={styles.title}>AsyncStorageExample</Text>
            <TextInput
                placeholder='Enter Username'
                value={username}
                onChangeText={setUsername}
                style={styles.textfield}
            />
            <TouchableOpacity style={styles.button} onPress={() => storeData('username', username)}>
                <Text style={styles.text}>Save Username</Text>
                {/* <Button title='Save Username' style={styles.button1} onPress={() => storeData('username', username)} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => getData('username')}>
                <Text style={styles.text}>Get Username</Text>
                {/* <Button title='Get Username' style={styles.button1} onPress={() => getData('username')} /> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => removeData('username')}>
                <Text style={styles.text}>Remove Username</Text>
                {/* <Button title='Remove Username' style={styles.button1} onPress={() => removeData('username')} /> */}
            </TouchableOpacity>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>Stored Username: {storedUsername}</Text>
        </View>
    )
}

export default AsyncStorageExample

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    textfield: {
        backgroundColor: "white",
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        padding: 12
    },
    button: {
        padding: 15,
        marginHorizontal: 20,
        marginTop: 5,
        backgroundColor: "lightblue",
        borderRadius: 10
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold'
    }
})