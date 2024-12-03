// rnfe to get basic template
import React from 'react'
// import { View, Text, Button } from 'react-native'
// import First from '../../src/components/First';
import { View } from 'react-native';
// import JSX from '../../src/components/JSX';
import OnPress from '../../src/components/OnPress';


const HomeScreen = () => {
  return (
    <View>
      {/* <Text style={{ fontSize: 30 }}>React Native Text Component</Text>
      <Text style={{ fontSize: 30 }}>React Native Text Component</Text>
      <Button title='This is a Button'/>
      <First />
      <First /> */}
      {/* <JSX /> */}
      <OnPress />
    </View>
  )
}

// const First = () => {
//   return(
//     <View>
//       <Text>This is reusable Component</Text>
//     </View>
//   )
// }

export default HomeScreen