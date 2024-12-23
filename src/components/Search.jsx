import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const contacts = [
        {id: 1, name: "Adwait Barkale"},
        {id: 2, name: "Magnus Carlsen"},
        {id: 3, name: "Hikaru Nakamura"},
        {id: 4, name: "Levon Aronian"},
        {id: 5, name: "Fabiano Caruana"},
        {id: 6, name: "Ding Liren"},
        {id: 7, name: "Ian Nepomniachtchi"},
        {id: 8, name: "Anish Giri"},
        {id: 9, name: "Vishwanathan Anand"},
        {id: 10, name: "Sergey Karjakin"}
    ];
    const filteredContatcs = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    const renderItem = ({ item }) => (
        <View style={styles.contactItem}>
            {/* <Text>{item.id}.  </Text> */}
            <Text style={styles.contactName}>{item.name}</Text>
        </View>
    )
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <TextInput 
        placeholder='Search Contacts...'
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />
    <FlatList 
        data={filteredContatcs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
    />


    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e3f2fd",
        padding: 20
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: "#1e88e5",
        marginBottom: 20,
        textAlign: 'center'
    },
    searchBar: {
        height: 50,
        borderColor: "#90caf9",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: "#fff",
        paddingHorizontal: 15
    },
    listContainer: {
        paddingBottom: 20
    },
    contactItem: {
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    contactName: {
        fontSize: 18,
        color: '#424242'
    }
})