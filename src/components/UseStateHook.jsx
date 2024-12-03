import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
    let arr = [1,2,3]
    const [num1, num2, num3] = arr // Array Dec
    const [name, setName] = useState('Adwait');
    const updateName = () => {
        setName("Raghav")
    }
  return (
    <View>
      <Text style={ {fontSize: 30} }>UseStateHook</Text>
      <Text style={ {fontSize: 30} }>Concept: UseStateHook</Text>
      <Text style={ {fontSize: 18} }>Description: UseStateHook is used to update or render UI when value of variable changes.
        Like name is Adwait and onTap of Button we change name to Raghav even if Text property uses name variable it does not render on change
        hence we need to use useStateHook.
      </Text>
      <Text style={ {fontSize: 30} }>Name: {name}</Text>
      {/* <Button title="Change Name" onPress={() => setName('Raghav')} /> */}
      <Button title="Change Name" onPress={updateName} />
    </View>
  )
}

export default UseStateHook