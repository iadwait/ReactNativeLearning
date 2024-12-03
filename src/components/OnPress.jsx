import { View, Text, Button} from 'react-native'
import React from 'react'

const OnPress = () => {
    const btnTapped = () => {
        console.log("Button Tapped")
    }
    const greetPerson = (name) => {
        console.log("Welcome: ", name, " !!")
    }
  return (
    <View>
      <Text style={ {fontSize: 30} }>OnPress</Text>
      {/* Inside OnPress we don't use () as it gets called immediately, and for function with parameter we use () => func with parameter to avoid immediate call  */}
      <Button title='Tap' onPress={btnTapped}/>
      <Button title='Button With Parameters' onPress={() => greetPerson("Adwait")}/>
    </View>
  )
}

export default OnPress