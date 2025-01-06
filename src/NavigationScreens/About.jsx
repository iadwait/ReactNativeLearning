import { View, Text, Button } from 'react-native'
import React from 'react'

// const About = (props) => {
  // props.route.params
  // props.navigation.goBack()
  
const About = ({navigation, route}) => {
    console.log(route.params)
    const {username, age} = route.params
    console.log(username)
  return (
    <View>
      <Text>About</Text>
      <Text>Login Name: {username}</Text>
      <Text>Age: {age}</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default About