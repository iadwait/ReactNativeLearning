import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomDropdown from './CustomDropdown'
import { useState } from 'react'

const CustomDropDownUsage = () => {

const dropDownData = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
const [selectedItem, setSelectedItem] = useState(null);

const handleItemSelect = (item) => {
  console.log(`Selected Item = ${item}`)
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <Text>CustomDropDownUsage</Text>

        {/* Custom Dropdown */}
        <CustomDropdown 
          data={dropDownData}
          onSelect={handleItemSelect}
          placeholder="Select an option"
        />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CustomDropDownUsage