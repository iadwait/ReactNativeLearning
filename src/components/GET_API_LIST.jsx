import { Text, Alert, FlatList, View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios'

const GET_API_LIST = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    // axios.get('http://10.0.2.2:3000/users').then((response) => {
    //     console.log(response.data)
    //     setUsersData(response.data);
    // })

    const getUsersData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/users')
        console.log(response.data)
        setUsersData(response.data)
      } catch (error) {
        Alert.alert('Error', 'Error fetching users Data, make sure JSON Server is running')
      }
    }

    getUsersData();

  }, [])

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  )
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>Users</Text>
        <FlatList
          data={usersData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Should always be string, if your id is not in string use toString()
        />
      </View>
    </SafeAreaView>
  )
}

export default GET_API_LIST

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
    //padding: 20
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
    borderLeftWidth: 5,
    borderLeftColor: "#00796b",
    marginHorizontal: 20
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: "#004d40",
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    color: "#004d40"
  }

})