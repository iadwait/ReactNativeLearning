import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { CounterContext } from './Parent'

const SubChild = ({ counter }) => {
    console.log(counter)
    const {count, incrementCounter} = useContext(CounterContext);
  return (
    <View>
      <Text style={styles.text}>SubChild Component</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title='Increment Count' onPress={incrementCounter} />
    </View>
  )
}

export default SubChild

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})