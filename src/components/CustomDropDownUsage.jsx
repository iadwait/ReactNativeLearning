import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomDropdown from './CustomDropdown'
import { useState } from 'react'

const CustomDropDownUsage = () => {

const initialDropdownData = [
  {name: 'Option1', isSelected: false}, 
  {name: 'Option2', isSelected: false},
  {name: 'Option3', isSelected: false}, 
  {name: 'Option4', isSelected: false}, 
  {name: 'Option5', isSelected: false},
]

const [dropdownData, setDropdownData] = useState(initialDropdownData);

const handleItemSelect = (item) => {
  const updatedDropdownData = dropdownData.map((option) => {
    if (option.name === item.name) {
      return {...option, isSelected: !option.isSelected}
    }
    return option
  })
  //item.isSelected = !item.isSelected
  setDropdownData(updatedDropdownData);
  //console.log(`Selected Item = ${item}`)
  //console.log(`Selected Item = ${item.isSelected}`)
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
        <Text>CustomDropDownUsage</Text>

        {/* Custom Dropdown */}
        <CustomDropdown 
          data={dropdownData}
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