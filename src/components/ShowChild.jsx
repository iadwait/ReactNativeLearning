import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
useEffect(() => {
    //console.log("I am in Child Component")
    return() => { // Unmounting
        console.log("Child Component Unmounted")
    }
}, []);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Child Component</Text>
    </View>
  )
}

export default ShowChild