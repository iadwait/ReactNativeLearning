import { Text, Button } from 'react-native'
import React, { useState } from 'react'
import My from '../../src/components/My'
import { SafeAreaView } from 'react-native-safe-area-context';

const HideShowToggle = () => {
    const [status, setStatus] = useState(true);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>HideShowToggle</Text>
      {
        status ? <My /> : null
      }
      <Button title="Hide" onPress={() => setStatus(false)} />
      <Button title="Show" onPress={() => setStatus(true)} />
      <Button title="Toggle" onPress={() => setStatus(!status)} />
    </SafeAreaView>
  )
}

export default HideShowToggle