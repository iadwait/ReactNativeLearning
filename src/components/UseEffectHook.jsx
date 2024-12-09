import { Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const UseEffectHook = () => {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        console.log("Api Calling");
    }, []) // By Adding ,[] useEffect Hook only only get called once on Screen Launch (Mounting)
  return (
    <SafeAreaView>
        <Text style={ {fontSize: 30} }>UseEffectHook</Text>
        <Text style={ {fontSize: 25} }>counter: {counter}</Text>
        <Button title="Tap" onPress={() => {setCounter(counter + 1)}} />
    </SafeAreaView>
  )
}

export default UseEffectHook