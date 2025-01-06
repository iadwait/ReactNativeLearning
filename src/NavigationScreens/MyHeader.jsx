import { View, Text, Button } from 'react-native'
import React from 'react'

const MyHeader = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>MyHeader on top</Text>
        <Button 
            title='Go to Login'
            onPress={() => navigation.navigate('Login')}
        />
    </View>
  )
}

export default MyHeader