import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {
    const [userName, setUserName] = useState('');
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput 
        placeholder='Enter Name'
        onChangeText={setUserName}
      />
      {/* <Button title='Login' onPress={() => navigation.navigate('About', {username: 'Adwait', age: 26})}/> */}
      <Button title='Login' onPress={() => navigation.navigate('About', {username: userName, age: 26})}/>
      <Button title='Show Drawer' onPress={() => navigation.navigate('Drawer')}/>
    </SafeAreaView>
  )
}

export default Login