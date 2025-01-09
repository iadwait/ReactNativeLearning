import { View, Text } from 'react-native'
import React from 'react'
import SubChild from './SubChild'

const FirstChild = ({counter}) => {
  return (
    <View>
      <SubChild counter={counter}/>
    </View>
  )
}

export default FirstChild