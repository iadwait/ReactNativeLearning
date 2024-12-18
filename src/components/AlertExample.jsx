import { Text, Button, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const showAlert = () => {
    Alert.alert(
        'Alert Title',
        'Alert Message',
        [ // Buttons Arrat
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Tapped'),
                style: 'cancel'
            },
            {
                text: 'Ok',
                onPress: () => console.log('Ok Tapped'),
            }
        ],
        { cancelable: false } // Outside alert if user taps cancel or not
    )
}

const AlertExample = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 25}}>AlertExample</Text>
      <Button title='Show Alert' onPress={showAlert}/>
    </SafeAreaView>
  )
}

export default AlertExample