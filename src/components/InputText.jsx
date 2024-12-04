import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [userName, setUserName] = useState()
  return (
    <View>
      <Text style={ {fontSize: 30, margin: 20} }>InputText</Text>
      {/* In TextInput onChangeText Arrow function contains a variable where text changes will be received */}
      <TextInput style={ {fontSize: 20, borderWidth: 2, borderColor: 'black', margin: 10} } 
      placeholder='Enter your name'
      value={userName} // We have mapped state with value so that when userName is cleared value from Textfield will also get cleared
      onChangeText={(tflData) => setUserName(tflData)}
      />
      <Text style={ {fontSize: 20, margin: 10} }>Entered Data: {userName}</Text>
      <Button title='Clear Data' onPress={() => setUserName('')}/>
    </View>
  )
}

export default InputText