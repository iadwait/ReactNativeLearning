import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../style/style'

const Styling = () => {
    return (
        <View>
            <Text style={{ fontSize: 30, backgroundColor: 'crimson', color: 'white' }}>Inline Styling</Text>
            <Text style={style.commonText}>Internal Styling</Text>
            <Text style={styles.commonText}>External Styling</Text>
            <Text>
                If you apply multiple styling like Inline, Internal, External.
                Hightest precedence is given to Inline than to Internal and than to External if property is conflciting in all
            </Text>
            <Text style={[styles.commonText, style.commonText, { backgroundColor: 'crimson' }]}>Mix Styling</Text>
        </View>
    )
}

// Create Style to use for internal styling
const style = StyleSheet.create({
    commonText: {
        color: 'white',
        backgroundColor: 'green',
        fontSize: 30,
        marginVertical: 10,
        padding: 6,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'lightgreen'
    }
})

export default Styling