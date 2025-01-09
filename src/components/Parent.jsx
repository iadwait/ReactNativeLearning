import { View, Text, StyleSheet } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'
import { SafeAreaView } from 'react-native-safe-area-context';


// Problem Pass data from 1st Component to direct last without using Props
// Context Api
// Create, Provide, Use
export const CounterContext = createContext();

const Parent = () => {
    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        console.log("Increment Count")
        setCount(count + 1);
    }
    return (
        <CounterContext.Provider value={{ count, incrementCounter }}>
            <View style={styles.countainer}>
                <FirstChild counter={counter} />
            </View>
        </CounterContext.Provider>
    )
}

export default Parent

const styles = StyleSheet.create({
    countainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})