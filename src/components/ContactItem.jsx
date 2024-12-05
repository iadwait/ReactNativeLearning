import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../Screens/Contact/style'

const ContactItem = ({name, email}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  )
}

export default ContactItem