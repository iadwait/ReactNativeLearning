import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const toggleLoader = () => {
        setLoading(!loading)
    }
    return (
        <View style={styles.container}>
            {/* Size number works only on Android */}
            {/* <ActivityIndicator size={100} color="#4CAF50" /> */}
            {/* For Android and iOS we can use large or small as value */}
            {
                loading ?
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size='large' color="#4CAF50" />
                        <Text style={styles.loadingText}>Please wait</Text>
                    </View>
                    :
                    null
            }

            {/* <ActivityIndicator size='small' color="#4CAF50" /> */}

            <TouchableOpacity style={styles.button} onPress={toggleLoader}>
                <Text style={styles.buttonText}>{loading ? 'Hide Loader' : 'Show Loader'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Take all available Space
        justifyContent: 'center', // Horizontally Center
        alignItems: 'center', // Vertically Center
        backgroundColor: '#f0f0f0'
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#4CAF50",
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '600'
    },
    loaderContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5 // Works only on Android
    },
    loadingText: {
        marginTop: 15,
        fontSize: 16,
        color: "#4CAF50",
        fontWeight: 'bold'
    }
})

export default Loader