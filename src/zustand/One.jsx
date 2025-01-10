import { View, Text } from 'react-native'
import React from 'react'
import Two from './Two'
import { SafeAreaView } from 'react-native-safe-area-context'

const One = () => {
  return (
    <SafeAreaView>
      <Text>One</Text>
      <Two />
    </SafeAreaView>
  )
}

export default One