import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {id: 1, title: 'title 1'},
    {id: 2, title: 'title 2'},
    {id: 3, title: 'title 3'},
    {id: 4, title: 'title 4'},
    {id: 5, title: 'title 5'},
    {id: 6, title: 'title 6'},
    {id: 7, title: 'title 7'},
    {id: 8, title: 'title 8'},
    {id: 9, title: 'title 9'},
    {id: 10, title: 'title 10'},
]

const FlatListScreen = () => {
    const renderItem = ( {item} ) => (
        <View style={ style.item }>
            <Text style={style.title}>{item.title}</Text>
        </View>
    )
  return (
    <View style={style.container}>
      <Text style={ {fontSize: 30} }>FlatListScreen</Text>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle = {style.list}
      />
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#f8f8f8",
        paddingTop: 20
    },
    list: {
        paddingHorizontal: 20,
        marginHorizontal: 20,
        backgroundColor: 'lightgreen'
    },
    item: {
        backgroundColor: 'lightgray',
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 8,
        padding: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18
    }
})

export default FlatListScreen