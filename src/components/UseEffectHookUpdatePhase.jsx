import { Button, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


// We can have multiple useEffect Hook in same file
// By mentioning [count] only if count update that useEffect Hook will get called
// We use InfoDetails component below Props with useEffect Hook

const UseEffectHookUpdatePhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(20);
    // useEffect( () => {
    //     console.log('I am inside useEffect Hook');
    // }, [counter]) // Only when counter state updates this hook will get called.  [counter, SecondState]

    // useEffect( () => {
    //     console.log("Score Use Effect Hook")
    // }, [score])

  return (
    <SafeAreaView>
      <Text style={ {fontSize: 30, marginBottom: 20} }>UseEffectHookUpdatePhase</Text>
      <Text style={ {fontSize: 25, marginBottom: 20} }>counter: {counter}</Text>
      <Text style={ {fontSize: 25, marginBottom: 20} }>score: {score}</Text>
      <Button title="Counter" onPress={() => {setCounter(counter + 1)}} />
      <Button title="Score" onPress={() => {setScore(score + 10)}} />
    <InfoDetails count={counter} points={score} />
    </SafeAreaView>
  )
}

const InfoDetails = ({count, points}) => {
    useEffect(() => {
        console.log("Inside Child Component")
    }, [count])
    return (
        <View>
            <Text style={{ fontSize: 30, marginBottom: 20 }}>Info Detail</Text>
            <Text style={{ fontSize: 25, marginBottom: 20 }}>counter: {count}</Text>
            <Text style={{ fontSize: 25, marginBottom: 20 }}>score: {points}</Text>
        </View>
    )
}


export default UseEffectHookUpdatePhase