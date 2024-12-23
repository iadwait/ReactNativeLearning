import { Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button 
        title='Go to About'
        onPress={()=> navigation.navigate('About')}
      />
    </SafeAreaView>
  )
}

export default Home