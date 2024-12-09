import { Button, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ShowChild from '../../src/components/ShowChild'

const UseEffectHookUmmountingPhase = () => {
    const [showChild, setShowChild] = useState(true);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>UseEffectHookUmmountingPhase</Text>
      {
        showChild ? <ShowChild /> : null
      }
      <Button title='Toggle' onPress={() => setShowChild(!showChild)}/>
    </SafeAreaView>
  )
}

export default UseEffectHookUmmountingPhase