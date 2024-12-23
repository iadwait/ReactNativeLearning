import { View, Text } from 'react-native'
import React from 'react'

const About = ({navigation, route}) => {
    console.log(route.params)
    const {username, age} = route.params
    console.log(username)
  return (
    <View>
      <Text>About</Text>
      <Text>Login Name: {username}</Text>
      <Text>Age: {age}</Text>
    </View>
  )
}

export default About