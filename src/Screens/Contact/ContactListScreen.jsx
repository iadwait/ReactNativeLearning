import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactInfo'
import { SafeAreaView } from 'react-native-safe-area-context'
import ContactItem from '../../components/ContactItem'
import { styles } from '../Contact/style'

const ContactListScreen = () => {
    const renderItem = ({ item }) => (
         <ContactItem name={item.name} email={item.email}/>
    )
    return (
        <SafeAreaView>
            <FlatList
                data={users}
                renderItem={renderItem}
                keyExtractor={(item) => item.id }
                contentContainerStyle={styles.list}
                ListHeaderComponent={
                    <Text style={styles.heading}>Contacts</Text>
                }
            />
        </SafeAreaView>
    )
}

export default ContactListScreen