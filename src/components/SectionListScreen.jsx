import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItems = [
    {
        title: "Fruits",
        data: [ // Nested Data should have variable name as data
            {id: 1, name: "Apple"},
            {id: 2, name: "Mango"},
            {id: 3, name: "Grapes"},
        ]
    },
    {
        title: "Vegetables",
        data: [ // Nested Data should have variable name as data
            {id: 4, name: "Tomato"},
            {id: 5, name: "Carrot"},
            {id: 6, name: "Potato"},
        ]
    }
]

const SectionListScreen = () => {
    const renderSectionHeader = ( {section} ) => (
        <View style={style.header}>
            <Text style={style.headerTitle}>{section.title}</Text>
        </View>
    )
    const renderItem = ({item}) => (
        <View style={style.item}>
            <Text style={style.title}>{item.name}</Text>
        </View>
    )
  return (
    <View style={style.container}>
      <Text style={ {fontSize: 30} }>SectionListScreen</Text>
      <SectionList 
        sections={listItems}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

// Styles
const style = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
        paddingTop: 20
    },
    item: {
        backgroundColor: '#add8e6',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontSize: 18
    },
    header: {
        backgroundColor: "#90ee90",
        padding: 10,
        borderRadius: 10,
        marginVertical: 5
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    }

})

export default SectionListScreen