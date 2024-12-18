import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';

const GET_API = () => {
    //  http://localhost:3000/users to refer system local host inside emulator use 10.0.2.2 instead of localhost

    // Api call using JS Fetch method, old method
    // useEffect(() => {
    //     fetch('http://10.0.2.2:3000/users').then((response) => {
    //         response.json().then((result) => {
    //             console.log(result)
    //         })
    //     })
    // }, [])
    
    // Api call using Axios method, New method, Third party library
    const [myData, setMyData] = useState([]);
    useEffect(() => {
        axios.get('http://10.0.2.2:3000/users').then((result) => {
            console.log(result.data)
            setMyData(result.data)
            // console.log(JSON.stringify(result.data, null, 2)); https://datausa.io/api/data?drilldowns=Nation&measures=Population
        })
    }, [])
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 25 }}>GET API METHOD</Text>
            <Text style={{ fontSize: 25, margin: 5 }} >ID   NAME   EMAIL</Text>
            {
                myData.map((item) => (
                    <Text key={item.id} style={{ fontSize: 18, margin: 5 }}> {item.id}. {item.name} || {item.email} </Text>
                ))
            }
        </SafeAreaView>
    )
}

export default GET_API