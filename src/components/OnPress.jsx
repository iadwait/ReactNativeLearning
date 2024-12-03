import { View, Text, Button} from 'react-native'
import React from 'react'

const OnPress = () => {
    let name = "Welcome"
    const btnTapped = () => {
        name = "Welcome Adwait"
        console.log("Button Tapped, name = ", name)
    }
    const greetPerson = (name) => {
        console.log("Welcome: ", name, " !!")
    }
  return (
    <View style={ {padding: 20} }>
      <Text style={ {fontSize: 30} }>OnPress</Text>
      <Text style={ {fontSize: 30} }>{name}</Text>
      {/* Inside OnPress we don't use () as it gets called immediately, and for function with parameter we use () => func with parameter to avoid immediate call  */}
      <View style={ { marginBottom: 20 } }>
        <Button title='Tap' onPress={btnTapped}/>
      </View>
      <Button title='Button With Parameters' onPress={() => greetPerson("Adwait")}/>
    </View>
  )
}

export default OnPress